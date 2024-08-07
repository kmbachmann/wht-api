export class ProjectDto {
    projectName: string;
    modelId: number;
    startDate?: Date;
    endDate?: Date;
    startPhoto?: Buffer;
    endPhoto?: Buffer;
    notes?: string;
    userId?: number;
}