import { ListAllRoutesUseCase } from './../../../application/list-all-routes.use-case';
import { RouteInMemoryRepository } from '../../db/in-memory/route-in-memory.repository';
import { CreateRouteUseCase } from './../../../application/create-route.use-case';
import express, {Express, Request, Response} from "express";

const app: Express = express();
app.use(express.json());
const port = process.env.PORT || 3000;

const routeRepo = new RouteInMemoryRepository();

app.post('/routes', async (req: Request, res: Response) => {
const createUseCase = new CreateRouteUseCase(routeRepo);

const output =  await createUseCase.execute(req.body);
res.status(201).json(output);
});

app.get('/routes', async (req: Request, res: Response) => {
    const listAllRoutesUseCase = new ListAllRoutesUseCase(routeRepo);
    
    const output =  await listAllRoutesUseCase.execute();
    res.json(output);
    });

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});