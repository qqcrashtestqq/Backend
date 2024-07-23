import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  first_name: string;
  @IsString()
  user_name: string;
  @IsString()
  @IsEmail()
  email: string;
  @IsString()
  @MinLength(3)
  @MaxLength(255, { message: 'you lendth password is long' })
  password: string;
}
