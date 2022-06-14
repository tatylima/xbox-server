import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  @ApiProperty({
    description: 'O nome usado para o perfil',
    example: 'tatianagandra123',
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'ID do Usuário (admin)',
    example: 'f7f45b19-bb7c-4f0d-87ea-f0d3c04423b5',
  })
  userId: string;

  @IsUrl()
  @ApiProperty({
    description: 'Imagem do Perfil',
    example: 'https://',
  })
  image: string;

  gameId?: string;
}
