import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { AuthUserResponse } from './response';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @ApiTags('API')
  @ApiResponse({
    status: 201,
    type: AuthUserResponse,
  })
  @Post('login')
  async loginhUsers(@Body() dto: CreateAuthDto): Promise<AuthUserResponse> {
    return this.authService.loginUser(dto);
  }
}
