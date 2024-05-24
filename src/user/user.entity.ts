import { Entity, Column, ObjectIdColumn, OneToMany } from 'typeorm';
import { Task } from '../task/task.entity';

@Entity()
export class User {
    @ObjectIdColumn()
    id: string;

    @Column({ unique: true })
    email: string;

    @OneToMany(() => Task, (task) => task.user)
    tasks: Task[];
}
