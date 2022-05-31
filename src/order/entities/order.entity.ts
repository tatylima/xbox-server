import { Product } from 'src/product/entities/product.entity';
import { Game } from 'src/game/entities/game.entity';
import { User } from 'src/user/entities/user.entity';

export class Order {
  id?: string;
  user?: User;
  game?: Game;
  createdAt?: Date;
  updatedAt?: Date;
  products?: Product[];
}
