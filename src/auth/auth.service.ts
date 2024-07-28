import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UserService } from 'src/user/user.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { AppError } from 'src/common/constants/errors';
import * as bcrypt from 'bcrypt';
import { TokenService } from 'src/token/token.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly tokenService: TokenService,
  ) {}
  // auth user
  async loginUser(dto: CreateAuthDto) {
    const existUser = await this.userService.userByEmail(dto.email);
    if (!existUser) throw new BadRequestException(AppError.EMAIL_NOT_EXIST);
    const validatePassword = await bcrypt.compare(
      dto.password,
      existUser.password,
    );
    if (!validatePassword) throw new BadRequestException(AppError.WRONG_DATA);
    const userDate = {
      name: existUser.first_name,
      email: existUser.email,
    };
    const token = await this.tokenService.generateJwtToken(userDate);
    return { ...existUser, token };
  }
}
