import { Injectable,NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    // Procura e checa se o user existe, usando o email
    const user = await this.prisma.user.findUnique({ where: { email },
     });

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    // Valida se a senha informada é correta
    const validHash = await bcrypt.compare(password /* SENHA DO DTO */, user.password /*SENHA DO BANCO  */ );

    if(validHash === false){
      throw new UnauthorizedException('Credenciais inválidas')
    }

    delete user.password;

    return {
      token: this.jwtService.sign({ email }),
      user,
    };
  }
}
