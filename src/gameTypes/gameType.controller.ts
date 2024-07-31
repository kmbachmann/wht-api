import { Controller, Get } from '@nestjs/common';
import { GameTypes } from './gameType.entity';
import { GameTypeService } from './gameType.service';

@Controller('game-types')
export class GameTypeController {
  constructor(private readonly gameTypeService: GameTypeService) {
    console.log('GameTypeController Initialized');
  }

  @Get()
  getAll(): Promise<GameTypes[]> {
    console.log('Calling game-types GET');
    return this.gameTypeService.getAll();
  }
}
