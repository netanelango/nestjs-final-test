import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
    console.log('Application started on port 3000');

    const server = app.getHttpServer();
    const router = server._events.request._router;
    console.log('List of registered routes:');
    router.stack.forEach((route: any) => {
        if (route.route) {
            console.log(
                `${route.route.stack[0].method.toUpperCase()}: ${route.route.path}`,
            );
        }
    });
}
bootstrap();
