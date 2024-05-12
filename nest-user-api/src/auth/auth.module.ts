import { Global, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from './auth.guard';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';

@Global()
@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: '123456',
      signOptions: { expiresIn: '60s' }
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthGuard, UsersService],
  exports: [AuthGuard]
})
export class AuthModule {}