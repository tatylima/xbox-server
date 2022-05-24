import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
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

  findOne(id: string): Promise<Game> {
    return this.prisma.game.findUnique({ where: { id }});
  }

  //e no método create para aguardar uma Promise de uma entidade Game.//
  create(dto: CreateGameDto): Promise<Game> {
    const data: Game = { ...dto };

    return this.prisma.game.create({ data });
  }
  update(id: string, dto: UpdateGameDto): Promise<Game> {
    const data: Partial<Game> = { ...dto };

    return this.prisma.game.update({
      where: { id },
      data,
    });
  }
}


