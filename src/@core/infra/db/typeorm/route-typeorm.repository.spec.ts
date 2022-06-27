import { Route } from '../../../domain/route.entity';
import { DataSource } from 'typeorm';
import { RouteTypeOrmRepository } from './route-typeorm.repository';
import { RouteSchema } from './route.schema';

describe(" RouteTypeOrmRepository Test", () => {

    it("should insert a new route", async () => {

        const  dataSource = new DataSource({
            type:'sqlite',
            database: ':memory:',
            synchronize:true,
            logging:false,
            entities: [RouteSchema],
        });
        await dataSource.initialize();
        const ormRepo = dataSource.getRepository(Route);
        const repository = new RouteTypeOrmRepository(ormRepo);

        const route = Route.create({
            title: 'minha rota',
            startPosition: {lat: 0, lng: 1},
            endPosition: {lat: 2, lng: 3}
        });

       await repository.insert(route);

       const routeFound = await ormRepo.findOneBy({ id: route.id})
       expect(routeFound.toJSON()).toStrictEqual(route.toJSON());
       //expect(repository.items).toStrictEqual([route]);
    });


});


