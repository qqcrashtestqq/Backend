import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
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
