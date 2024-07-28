import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { AppError } from 'src/common/constants/errors';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) private readonly userRepository: typeof User,
  ) {}
  // hash password user
  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }
  // user search
  async userByEmail(email: string, user_name?: string) {
    return this.userRepository.findOne({
      where: {
        [Op.or]: [{ email: email }, { user_name: user_name }],
      },
    });
  }
  // register user
  async createUser(dto: CreateUserDto): Promise<CreateUserDto> {
    const existUser = await this.userByEmail(dto.email, dto.user_name);
    if (existUser) throw new BadRequestException(AppError.USER_EXIST);
    dto.password = await this.hashPassword(dto.password);
    await this.userRepository.create({
      first_name: dto.first_name,
      user_name: dto.user_name,
      email: dto.email,
      password: dto.password,
    });
    return dto;
  }

  async publicUser(email: string) {
    return this.userRepository.findOne({
      where: { email },
      attributes: { exclude: ['password'] },
    });
  }

  // update user
  async updateUser(email: string, dto: UpdateUserDto) {
    await this.userRepository.update(dto, { where: { email } });
    return dto;
  }

  // detele user
  async deleteUser(email: string) {
    await this.userRepository.destroy({ where: { email } });
    return true;
  }
}
