import { Injectable } from '@nestjs/common';
import { GameTypes } from './gameType.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class GameTypeService {
constructor(@InjectRepository(GameTypes) private readonly gameTypeRepository: Repository<GameTypes>) {}
  
async getAll(): Promise<GameTypes[]> {
    return this.gameTypeRepository.find();
  }
}
