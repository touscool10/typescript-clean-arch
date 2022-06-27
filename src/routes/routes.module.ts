import { DataSource } from 'typeorm';
import { RouteSchema } from './../@core/infra/db/typeorm/route.schema';
import { Module } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { RoutesController } from './routes.controller';
import { RouteInMemoryRepository } from 'src/@core/infra/db/in-memory/route-in-memory.repository';
import { CreateRouteUseCase } from 'src/@core/application/create-route.use-case';
import { ListAllRoutesUseCase } from 'src/@core/application/list-all-routes.use-case';
import { RouteRepositoryInterface } from 'src/@core/domain/route.repository';
import { TypeOrmModule, getDataSourceToken } from '@nestjs/typeorm';
import { RouteTypeOrmRepository } from '../@core/infra/db/typeorm/route-typeorm.repository';
import { ROUTES } from '@nestjs/core/router/router-module';
import { Route } from 'src/@core/domain/route.entity';

@Module({
  imports:[ TypeOrmModule.forFeature([RouteSchema]) ],
  controllers: [RoutesController],
  providers: [
    RoutesService,
    {
      provide: RouteTypeOrmRepository,
      useFactory: (dataSource: DataSource) => {
        return new RouteTypeOrmRepository(dataSource.getRepository(Route))
      },
      inject: [getDataSourceToken()]
    },
    {
      provide: RouteInMemoryRepository,
      useClass: RouteInMemoryRepository,
    },  
    {
      provide: CreateRouteUseCase,
      useFactory: (routeRepo: RouteRepositoryInterface) => {
        return new CreateRouteUseCase(routeRepo);
      },
      inject: [RouteTypeOrmRepository]
    },  
    {
      provide: ListAllRoutesUseCase,
      useFactory: (routeRepo: RouteRepositoryInterface) => {
        return new ListAllRoutesUseCase(routeRepo);
      },
      inject: [RouteTypeOrmRepository]
    }, 
  ]
})
export class RoutesModule {}
