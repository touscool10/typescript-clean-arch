import { RouteInMemoryRepository } from './../infra/db/route-in-memory.repository';
import { CreateRouteUseCase } from './create-route.use-case';
import { RouteProps } from "../domain/route.entity";

describe("CreateRouteUseCase Test", () => {
    it("should create a new route", async () => {
        const repo = new RouteInMemoryRepository();
        const createRouteUseCase = new CreateRouteUseCase(repo);
        const routeProps: RouteProps = {
            title: 'minha rota',
            startPosition: {lat: 0, lng: 1},
            endPosition: {lat: 2, lng: 3},
       }
      
       const output = await createRouteUseCase.execute(routeProps);

       expect(output).toStrictEqual({
        title: 'minha rota',
        startPosition: {lat: 0, lng: 1},
        endPosition: {lat: 2, lng: 3},
        points: []
   });
       expect(repo.items).toHaveLength(1);
    });

});