import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameTypes } from './gameTypes/gameType.entity';
import { GameTypeModule } from './gameTypes/gameType.module';
import { ConfigModule } from '@nestjs/config';
import { ModelModule } from './models/model.module';
import { Model } from './models/model.entity';

@Module({
  imports: [    
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [GameTypes, Model],
      synchronize: true,
    }), 
    ConfigModule.forRoot(),
    GameTypeModule,
    ModelModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
