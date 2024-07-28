import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { TokenModule } from 'src/token/token.module';
import { TokenService } from 'src/token/token.service';
import { JwtService } from '@nestjs/jwt';
import { JwtStrategy } from 'src/strategy';

@Module({
  imports: [UserModule, TokenModule],
  controllers: [AuthController],
  providers: [AuthService, TokenService, JwtService, JwtStrategy],
})
export class AuthModule {}
