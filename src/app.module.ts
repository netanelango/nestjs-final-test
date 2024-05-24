import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';
import { ConfigurationModule } from './infrastructure/configuration/configuration.module';
import { DatabaseModule } from './infrastructure/database/database.module';

@Module({
    imports: [
        ConfigurationModule,
        DatabaseModule,
        UserModule,
        TaskModule,
        TypeOrmModule.forRoot({
            type: 'mongodb',
            host: 'localhost',
            port: 24000,
            database: 'nestjs-final-test-db',
            useUnifiedTopology: true,
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
        }),
    ],
})
export class AppModule {}
