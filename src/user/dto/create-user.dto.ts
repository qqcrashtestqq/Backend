import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  first_name: string;
  @ApiProperty()
  @IsString()
  user_name: string;
  @ApiProperty()
  @IsString()
  @IsEmail()
  email: string;
  @ApiProperty()
  @IsString()
  @MinLength(3)
  @MaxLength(255, { message: 'you lendth password is long' })
  password: string;
}
