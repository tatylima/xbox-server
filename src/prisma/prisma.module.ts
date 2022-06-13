import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService],// Determina os provedores existentes
	exports: [PrismaService], // Realiza a exportação dos provedores que precisarão ser utilizados em outros módulos.
})
export class PrismaModule {}
