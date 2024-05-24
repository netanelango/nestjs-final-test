import { UserService } from './../user/user.service';
import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    HttpException,
    HttpStatus,
} from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
    constructor(
        private readonly taskService: TaskService,
        private readonly userService: UserService,
    ) {}

    @Get('/user/:userId')
    async getUserTasks(@Param('userId') userId: string) {
        if (isNaN(parseInt(userId))) {
            throw new HttpException(
                'Invalid userId format',
                HttpStatus.BAD_REQUEST,
            );
        }

        return this.taskService.getUserTasks(userId);
    }

    @Post()
    async addTask(
        @Body('name') name: string,
        @Body('userId') userId: string,
        @Body('priority') priority: string,
    ) {
        if (isNaN(parseInt(userId))) {
            throw new HttpException(
                'Invalid userId format',
                HttpStatus.BAD_REQUEST,
            );
        }
        const userExists = await this.userService.userExists(userId);
        if (!userExists) {
            throw new HttpException(
                'User does not exist',
                HttpStatus.BAD_REQUEST,
            );
        }

        const task = await this.taskService.addTask(
            name,
            userId,
            parseInt(priority, 10),
        );
        return task;
    }
}
