import { IsNotEmpty, IsEnum, IsNumber, IsString } from 'class-validator';

export class CreateMeasureDto {
  @IsNotEmpty()
  @IsString()
  customerCode: string;

  @IsNotEmpty()
  @IsEnum(['WATER', 'GAS'])
  measureType: 'WATER' | 'GAS';

  @IsNotEmpty()
  @IsNumber()
  measureValue: number;
}