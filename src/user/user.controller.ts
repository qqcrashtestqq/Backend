import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdateUserDto } from './dto/update-user.dto';
import { use } from 'passport';
// import { JwtAuthGuard } from '';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @ApiTags('API')
  @ApiResponse({
    status: 201,
    type: CreateUserDto,
  })
  @Post('create-user')
  async createUsers(@Body() dto: CreateUserDto) {
    return this.userService.createUser(dto);
  }

  // update user
  // @UseGuards(JwtAuthGuard)
  @ApiTags('API')
  @ApiResponse({ status: 200, type: UpdateUserDto })
  @Patch()
  apdateUser(@Body() updateDto: UpdateUserDto, @Req() request) {
    const user = request.user;
    return this.userService.updateUser(user.email, updateDto);
  }

  // datele user
  @ApiTags('API')
  // @UseGuards(JwtAuthGuard)
  @Delete('delete-user')
  deleteUser(@Req() request) {
    const user = request.user;
    return this.userService.deleteUser(user.email);
  }
}
