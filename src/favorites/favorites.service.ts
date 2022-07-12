import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { Game } from 'src/game/entities/game.entity';
import { User } from 'src/user/entities/user.entity';
import { handleErrorConstraintUnique } from 'src/utils/handle-error.util';
import { FavoriteProductDto } from './dto/favorite-product.dto';
import { Favorite } from './entities/favorite.entity';

@Injectable()
export class FavoritesService {
  constructor(private readonly prisma: PrismaService) {}

  async favoriteGame(dto: FavoriteGameDto): Promise<Favorite> {
    await this.verifyUserId(dto.userId);

    const game: Game = await this.prisma.game.findUnique({
      where: { name: dto.gameName },
    });

    if (!game) {
      throw new NotFoundException(
        `Produto de nome '${dto.gameName}' não encontrado`,
      );
    }

    const data: Prisma.FavoriteCreateInput = {
      user: {
        connect: {
          id: dto.userId,
        },
      },
      game: {
        connect: {
          name: dto.gameName,
        },
      },
    };

    return this.prisma.favorite
      .create({ data })
      .catch(handleErrorConstraintUnique);
  }

  async unfavoriteGame(id: string) {
    const favorite: Favorite = await this.prisma.favorite.findUnique({
      where: { id },
    });

    if (!favorite) {
      throw new NotFoundException(`Entrada de id '${id}' não encontrada`);
    }

    return this.prisma.favorite.delete({ where: { id } });
  }

  async getUserFavorites(id: string): Promise<Favorite[]> {
    await this.verifyUserId(id);

    return this.prisma.favorite.findMany({ where: { userId: id } });
  }

  async getUsersWhoFavoritedProduct(id: string) {
    const game: Game = await this.prisma.game.findUnique({
      where: { id },
    });

    if (!game) {
      throw new NotFoundException(`Entrada de id '${id}' não encontrada`);
    }

    return this.prisma.favorite.findMany({ where: { product: { id } } });
  }

  async verifyUserId(id: string): Promise<void | never> {
    const user: User = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(`Entrada de id '${id}' não encontrada`);
    }
  }
}
