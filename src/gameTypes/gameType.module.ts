import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameTypeController } from './gameType.controller';
import { GameTypeService } from './gameType.service';
import { GameTypes } from './gameType.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GameTypes])],
  controllers: [GameTypeController],
  providers: [GameTypeService],
})
export class GameTypeModule {}