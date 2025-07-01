import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class ResetOtpDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  otp: string;

  @IsString()
  @MinLength(4)
  password: string;
}
