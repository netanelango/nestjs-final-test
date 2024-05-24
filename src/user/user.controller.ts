import {
    Controller,
    Post,
    Body,
    HttpException,
    HttpStatus,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async createUser(@Body('email') email: string) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new HttpException(
                'Invalid email format',
                HttpStatus.BAD_REQUEST,
            );
        }

        const existingUser = await this.userService.getUserByEmail(email);
        if (existingUser) {
            throw new HttpException('User already exists', HttpStatus.CONFLICT);
        }

        const user = await this.userService.addUser(email);
        return user;
    }
}
