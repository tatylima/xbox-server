import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive, IsString, IsUrl } from 'class-validator';

export class CreateGameDto{
  @IsString()
  @ApiProperty({
    description: 'Nome do jogo',
    example: 'Senhor dos aneis',
  })
  title: string;

  @ApiProperty({
    description: 'Descrição do jogo',
    example: 'História, etc.',
  })
  description: string;

  @IsString()
  @ApiProperty({
    description: 'Gênero do jogo',
    example: 'Fantasia',
  })
  genreName: string;

  @IsNumber({
    maxDecimalPlaces: 2,
  })
  @IsPositive()
  @ApiProperty({
    description: 'Preço do jogo',
    example: '199.00',
  })
  price: number;

  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'Ano de lançamento do jogo',
    example: '2017',
  })
  year: number;

  @IsUrl()
  @ApiProperty({
    description: 'Link do trailer do jogo',
    example: 'https://www.youtube.com/watch?v=l1x2SB3--gA',
  })
  TrailerYouTubeUrl: string;

  @IsUrl()
  @ApiProperty({
    description: 'Link de gameplay do jogo',
    example: 'https://www.youtube.com/watch?v=l1x2SB3--gA',
  })
  GameplayYouTubeUrl: string;

  @IsNumber()
  @ApiProperty({
    description: 'Score do jogo no Imdb',
    example: '5',
  })
  ImdbScore: number;

  @IsUrl()
  @ApiProperty({
    description: 'Imagem do jogo',
    example: 'https://m.media-amazon.com/images/I/71RTZKIq4bL._AC_SX342_.jpg',
  })
  image: string;

}
