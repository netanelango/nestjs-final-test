import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async addUser(email: string): Promise<User> {
        const user = this.userRepository.create({ email });
        return this.userRepository.save(user);
    }
    async getUserByEmail(email: string): Promise<User | undefined> {
        return this.userRepository.findOne({ where: { email } });
    }

    async getUser(email: string): Promise<User | undefined> {
        return this.userRepository.findOne({ where: { email } });
    }

    async getUserById(userId: string): Promise<User | undefined> {
        return this.userRepository.findOne({
            where: { id: userId.toString() },
        });
    }

    async userExists(userId: string): Promise<boolean> {
        const user = await this.getUserById(userId);
        return !!user;
    }

    async resetData(): Promise<void> {
        await this.userRepository.clear();
    }
}
