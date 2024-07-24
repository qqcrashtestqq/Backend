import { IsString } from 'class-validator';

export class AuthUserResponse {
  @IsString()
  first_name: string;
  @IsString()
  user_name: string;
  @IsString()
  email: string;
  @IsString()
  password: string;
}
