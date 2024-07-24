import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateAuthDto {
  @IsString()
  @IsEmail()
  email: string;
  @MinLength(3)
  @MaxLength(255, { message: 'you lendth password is long' })
  password: string;
}
