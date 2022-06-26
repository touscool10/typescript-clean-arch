/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { RoutesController } from './routes.controller';
import { RouteInMemoryRepository } from './../infra/db/route-in-memory.repository';

@Module({
  controllers: [RoutesController],
  providers: [
    RoutesService,
    {
      provide: RouteInMemoryRepository,
    }  
  ]
})
export class RoutesModule {}
