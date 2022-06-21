import { Route, RouteProps, LatLng } from './route.entity';

describe('Route Tests', () => {
    test('constructor', () => {
       let routeProps: RouteProps = {
            title: 'minha rota',
            startPosition: {lat: 0, lng: 1},
            endPosition: {lat: 2, lng: 3},
       }

       let route = new Route(routeProps);
       expect(route.props).toStrictEqual({
        ...routeProps, points: []
       })

       routeProps = {
            title: 'minha rota',
            startPosition: {lat: 0, lng: 1},
            endPosition: {lat: 2, lng: 3},
            points: [
                {lat: 10, lng: 12}
            ]
        }

        route = new Route(routeProps);
        expect(route.props).toStrictEqual({
            ...routeProps, points: [
                {lat: 10, lng: 12}
                ]
        });
    });

        
    test('updateTitle method', () => {
        const routeProps: RouteProps = {
            title: 'minha rota',
            startPosition: {lat: 0, lng: 1},
            endPosition: {lat: 2, lng: 3},
    }
    const route = new Route(routeProps);
    route.updateTitle('title updated');
    expect(route.props.title).toBe('title updated');
    });

            
    test('updatePosition method', () => {
        const routeProps: RouteProps = {
            title: 'minha rota',
            startPosition: {lat: 0, lng: 1},
            endPosition: {lat: 2, lng: 3},
    }
    const route = new Route(routeProps);
    const startPosition: LatLng = {lat: 223, lng: 225};
    const endPosition: LatLng = {lat: 22, lng: 29};
    const points: LatLng[] = [
        {lat: 223, lng: 225},
        {lat: 22, lng: 29}
    ];
    route.updatePosition(startPosition, endPosition);
    route.props.points = points;
    
    expect(route.props.startPosition).toBe(startPosition);
    expect(route.props.endPosition).toBe(endPosition);
    expect(route.props.points).toBe(points);
    
    });


                
    test('updatePoints method', () => {
        const routeProps: RouteProps = {
            title: 'minha rota',
            startPosition: {lat: 0, lng: 1},
            endPosition: {lat: 2, lng: 3},
            points: [
                {lat: 0, lng: 3}
            ]
    }
    const route = new Route(routeProps);

    const newPoints: LatLng[] = [
        {lat: 223, lng: 225},
        {lat: 22, lng: 29}
    ];
    route.updatePoints(newPoints);

    expect(route.props.points).toStrictEqual(newPoints);
    expect(route.props.points).toHaveLength(2);

    });

});
