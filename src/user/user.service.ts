import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { handleError } from 'src/utils/handle-error.util';

@Injectable()
export class UserService {
  private userSelect = {
    id: true,
    nickname: true,
    name: true,
    password: false,
    image: true,
    createdAt: true,
    updatedAt: true,
  };

  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany({
      select: this.userSelect,
    });
  }

  async findOne(id: string): Promise<User> {
    const record = await this.prisma.user.findUnique({
      where: { id },
      select: this.userSelect,
    });

    if (!record) {
      throw new NotFoundException(`Registro com o id '${id}' não encontrado`);
    }

    return record;
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    if (createUserDto.password != createUserDto.confirmPassword) {
      throw new BadRequestException('As senhas informadas não conferem');
    }

    delete createUserDto.confirmPassword;

    const data: User = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    };
    return this.prisma.user
      .create({
        data,
        select: this.userSelect,
      })
      .catch(handleError);
  }

  async update(id: string, dto: UpdateUserDto): Promise<User> {
    await this.findOne(id);

    if (dto.password) {
      if (dto.password != dto.confirmPassword) {
        throw new BadRequestException('As senhas informadas não conferem');
      }
    }

    delete dto.confirmPassword;

    const data: Partial<User> = { ...dto };

    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }

    return this.prisma.user.update({
      data,
      where: { id },
      select: this.userSelect,
    });
  }

  async delete(id: string) {
    await this.findOne(id);
    await this.prisma.user.delete({
      where: { id },
    });
  }
}
