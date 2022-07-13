/* eslint-disable prettier/prettier */
import { INestApplication, Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
	// Garante que o banco está conectado
	async onModuleInit() {
		await this.$connect();
	}

	// Garante que antes de desligar a aplicação o banco será desconectado
	async enableShutdownHooks(app: INestApplication) {
		this.$on("beforeExit", async () => {
			await app.close();
		});
	}
}
