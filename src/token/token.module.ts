import { Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [JwtModule],
  providers: [TokenService, ConfigService],
  exports: [TokenModule],
})
export class TokenModule {}
