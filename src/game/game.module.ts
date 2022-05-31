import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { GameController } from './game.controller';
import { GameService } from './game.service';
import { PrismaModule } from '../prisma/prisma.module'

@Module({
  imports: [PrismaModule, PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [GameController],
  providers: [GameService],
})
export class GameModule {}
