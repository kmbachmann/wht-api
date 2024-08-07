import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProjectService } from './project.service';
import { Project } from './project.entity';
import { ProjectDto } from './project.dto';
import { InsertResult } from 'typeorm';

@Controller('projects')
export class ProjectController {
    constructor(private readonly projectService: ProjectService) {
        console.log('ProjectController Initialized');
    }

    @Get(':userId')
    getUsersProjects(@Param() params: { userId: string} ): Promise<Project[]> {
        console.log(`Calling Project GET by UserID ${params.userId}`);
        return this.projectService.getUsersProjects(parseInt(params.userId));
    }

    @Delete('/:userId/:projectId')
    deleteProjectForUser(@Param('userId') userId: string, @Param('projectId') projectId: string): Promise<any> {
        console.log(`Calling Project DELETE for UserID ${userId} and ProjectID ${projectId}`);
        return this.projectService.deleteProjectForUser(parseInt(userId), parseInt(projectId));
    } 

    @Post(':userId')
    createProject(@Param('userId') userId: string, @Body() project: ProjectDto): Promise<InsertResult> {
        console.log(`Calling Project POST for UserID ${userId}`);
        return this.projectService.createProjectForUser(parseInt(userId), project);
    }
}
