export type LatLng =  { lat: number; lng: number };

export type RouteProps = {
    title: string;
    startPosition: LatLng;
    endPosition:  LatLng;
    points?:  LatLng[];
};

export class Route{
    public props: Required<RouteProps>
    constructor(props: RouteProps) {
        this.props = {
            ...props,
            points: props.points || [],
        };
    }

    updateTitle(title: string){
        this.title = title; 
        //mudar para maiusculo
        //verificar alguns caracteres
        //validacoes       
    }

    updatePosition(startPosition: LatLng, endPosition: LatLng) {
        this.startPosition = startPosition;
        this.endPosition = endPosition;
        //mudar para maiusculo
        //verificar alguns caracteres
        //validacoes 
    }

    updatePoints(points: LatLng[]) {
        this.points = points;
        //mudar para maiusculo
        //verificar alguns caracteres
        //validacoes 
    }

    private set title(value: string){
        this.props.title = value;
    }
    get title(){
        return this.props.title; 
    }

    private set startPosition(value: LatLng){
        this.props.startPosition = value;
    }
    get startPosition(){
        return this.props.startPosition; 
    }

    private set endPosition(value: LatLng){
        this.props.endPosition = value;
    }
    get endPosition(){
        return this.props.endPosition; 
    }

    private set points(value: LatLng[]){
        this.props.points = value;
    }
    get points(){
        return this.props.points; 
    }

    toJSON() {
        return this.props;
    }
}

