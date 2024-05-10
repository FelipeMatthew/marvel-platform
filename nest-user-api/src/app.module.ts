import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port:  3307,
      username: 'root',
      password: 'root',
      database: 'nest',
      entities: [User],
      synchronize: true,
      logging: true,
    }),
      UsersModule,
    ],
      controllers: [AppController],
      providers: [AppService],
    })
export class AppModule {}
