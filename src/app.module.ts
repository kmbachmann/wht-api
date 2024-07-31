import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameTypes } from './gameTypes/gameType.entity';
import { GameTypeModule } from './gameTypes/gameType.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [    
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [GameTypes],
      synchronize: true,
    }), 
    ConfigModule.forRoot(),
    GameTypeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
