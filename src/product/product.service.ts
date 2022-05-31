import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { handleError } from 'src/utils/handle-error.util';
import { CreateProductDto } from './dto/create-Product.dto';
import { UpdateProductDto } from './dto/update-Product.dto';
import { Product } from './entities/Product.entity';

@Injectable()
export class ProductService {
constructor(private readonly prisma: PrismaService) {}

//Em findAll dizemos para aguardar uma Promise de uma array de entidades Product//
  findAll(): Promise<Product[]> {
    return this.prisma.product.findMany(); // < DB VIA ENTIDADE
  }


  async findOne(id: string): Promise<Product> {
    const record = await this.prisma.product.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`Registro com o '${id}' não encontrado.`)
    }

    return record;
  }

  //e no método create para aguardar uma Promise de uma entidade Product.//
  create(createProductDto: CreateProductDto): Promise<Product> {
    const data: Product = { ...createProductDto };
    return this.prisma.product
      .create({
        data,
      })
      .catch(handleError);
  }

  async update(id: string, dto: UpdateProductDto): Promise<Product> {
    await this.findOne(id);

    const data: Partial<Product> = { ...dto };
    return this.prisma.product.update({
     data,
     where: { id },
    });
  }
  async delete(id: string) {
    await this.findOne(id);
    await this.prisma.product.delete({ where: { id },
     });
  }


}
