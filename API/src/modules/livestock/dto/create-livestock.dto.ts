import { IsNotEmpty, IsNumber, IsOptional, IsString, IsDateString } from 'class-validator';

export class CreateLivestockDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsNotEmpty()
  @IsString()
  tagNumber: string;

  @IsOptional()
  @IsNumber()
  speciesId?: number;

  @IsOptional()
  @IsString()
  breed?: string;

  @IsOptional()
  @IsString()
  sex?: string;

  @IsOptional()
  @IsDateString()
  dateOfBirth?: string;

  @IsOptional()
  @IsNumber()
  fieldId?: number;

  @IsOptional()
  @IsString()
  status?: string;

  @IsNumber()
  farmId: number;
}
