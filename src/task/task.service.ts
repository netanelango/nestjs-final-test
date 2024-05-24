import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
    private readonly logger = new Logger(TaskService.name);

    constructor(
        @InjectRepository(Task)
        private taskRepository: Repository<Task>,
    ) {}

    async getTaskByName(name: string): Promise<Task | undefined> {
        return this.taskRepository.findOne({ where: { name } });
    }

    async getUserTasks(userId: string): Promise<Task[]> {
        return this.taskRepository.find({ where: { user: { id: userId } } });
    }

    async addTask(
        name: string,
        userId: string,
        priority: number,
    ): Promise<Task> {
        try {
            console.log('Attempting to add task:', name, userId, priority); // Ajout d'un log pour voir les paramètres
            const task = this.taskRepository.create({
                name,
                priority,
                user: { id: userId },
            });
            const savedTask = await this.taskRepository.save(task);
            console.log('Task added successfully:', savedTask); // Ajout d'un log pour voir la tâche sauvegardée
            this.logger.log(`Task with name ${name} created successfully.`);
            return savedTask;
        } catch (error) {
            console.error('Error occurred while adding task:', error); // Ajout d'un log pour les erreurs
            this.logger.error(
                `Error occurred while adding task: ${error.message}`,
            );
            throw error;
        }
    }

    async resetData() {
        await this.taskRepository.clear();
    }
}
