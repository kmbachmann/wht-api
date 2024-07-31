import { Injectable } from '@nestjs/common';
import { Model } from './model.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ModelService {
    constructor(@InjectRepository(Model) private readonly modelRepository: Repository<Model>) {}

    async getAll(): Promise<Model[]> {
        return this.modelRepository.find();
    }
}