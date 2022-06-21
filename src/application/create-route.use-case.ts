import { RouteRepositoryInterface } from '../domain/route.repository';
import { LatLng, Route } from '../domain/route.entity';


export class CreateRouteUseCase{

    constructor(private routeRepo: RouteRepositoryInterface){
    }
    
    async execute(input: CreateRouteInput): Promise<CreateRouteOutput> {
        const route = new Route(input);
        await this.routeRepo.insert(route);
        return route.toJSON() ;
    }

}

type CreateRouteInput = {
    title: string;
    startPosition: LatLng;
    endPosition: LatLng;
    paths?: LatLng[];
}

type CreateRouteOutput = {
    title: string;
    startPosition: LatLng;
    endPosition: LatLng;
    paths?: LatLng[];
}

//S             OLID