import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { handleError } from 'src/utils/handle-error.util';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './entities/game.entity';

@Injectable()
export class GameService {
constructor(private readonly prisma: PrismaService) {}

//Em findAll dizemos para aguardar uma Promise de uma array de entidades Game//
  findAll(): Promise<Game[]> {
    return this.prisma.game.findMany(); // < DB VIA ENTIDADE
  }


  async findOne(id: string): Promise<Game> {
    const record = await this.prisma.game.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`Registro com o '${id}' não encontrado.`)
    }

    return record;
  }

  //e no método create para aguardar uma Promise de uma entidade Game.//
  create(createGameDto: CreateGameDto): Promise<Game> {
    const data: Game = { ...createGameDto };
    return this.prisma.game
      .create({
        data,
      })
      .catch(handleError);
  }

  async update(id: string, dto: UpdateGameDto): Promise<Game> {
    await this.findOne(id);
    const data: Partial<Game> = { ...dto };
    return this.prisma.game.update({
      where: { id },
      data,
    });
  }
  async delete(id: string) {
    await this.findOne(id);
    await this.prisma.game.delete({ where: { id },
     });
  }



}
