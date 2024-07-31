import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameTypes } from './gameTypes/gameType.entity';
import { GameTypeModule } from './gameTypes/gameType.module';
import { Model } from './models/model.entity';

@Module({
  imports: [    
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [GameTypes, Model],
      synchronize: true,
    }), 
    GameTypeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
