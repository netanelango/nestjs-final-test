import { Entity, Column, ObjectIdColumn, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Task {
    @ObjectIdColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    priority: number;

    @ManyToOne(() => User, (user) => user.tasks)
    user: User;
}
