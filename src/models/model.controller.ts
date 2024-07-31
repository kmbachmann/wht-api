import { Controller, Get } from '@nestjs/common';
import { Model } from './model.entity';
import { ModelService } from './model.service';

@Controller('model')
export class ModelController {
    constructor(private readonly modelService: ModelService) {
        console.log('ModelController INitialized');
    }

    @Get()
    getAll(): Promise<Model[]> {
        console.log('Calling models GET');
        return this.modelService.getAll();
    }
}
