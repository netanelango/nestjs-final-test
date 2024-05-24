import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { routes } from './app.routes';

@Module({
    imports: [RouterModule.register(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
