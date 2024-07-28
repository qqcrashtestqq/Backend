import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateAuthDto {
  @ApiProperty()
  @IsString()
  @IsEmail()
  email: string;
  @MinLength(3)
  @MaxLength(255, { message: 'you lendth password is long' })
  password: string;
}
