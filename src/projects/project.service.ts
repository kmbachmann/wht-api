import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Equal, InsertResult, Repository } from 'typeorm';
import { Project } from './project.entity';
import { ProjectDto } from './project.dto';

@Injectable()
export class ProjectService {
    constructor(@InjectRepository(Project) private readonly projectRepository: Repository<Project>) {}
    async getUsersProjects(userId: number): Promise<Project[]> {
        return this.projectRepository.findBy({
            user_id: Equal(userId)
        });
    }

    async deleteProjectForUser(userId: number, projectId: number): Promise<any> {
        return this.projectRepository.delete({
            user_id: Equal(userId),
            project_id: Equal(projectId)
        })
    }

    async createProjectForUser(userId: number, project: ProjectDto): Promise<InsertResult> {
        const returnVal = await this.projectRepository.insert(this.createProjectFromDto(userId, project));

        return returnVal;
    }

    private createProjectFromDto(userId: number, project: ProjectDto): Project {
        let convertedProject = new Project();

        convertedProject.project_name = project.projectName;
        convertedProject.model_id = project.modelId;
        convertedProject.start_date = project.startDate;
        convertedProject.end_date = project.endDate;
        convertedProject.start_photo = project.startPhoto;
        convertedProject.end_photo = project.endPhoto;
        convertedProject.notes = project.notes;
        convertedProject.user_id = userId;

        return convertedProject;
    }
}