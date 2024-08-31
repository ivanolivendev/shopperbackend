import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateReadingDto {
  @IsNotEmpty()
  @IsString()
  measureId: string;

  @IsNotEmpty()
  @IsNumber()
  confirmedValue: number;
}