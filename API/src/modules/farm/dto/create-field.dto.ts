import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateFieldDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  location?: string;

  @IsOptional()
  @IsNumber()
  latitude?: number;

  @IsOptional()
  @IsNumber()
  longitude?: number;

  @IsNumber()
  farmId: number;
}
