import { Express, Router } from "express";
import bookRoutes from "./books";

export const configureRoutes = (app: Express): void => {
    const router = Router();
    app.use('/api/v1', router);

    app.use((req, res, next) => {
        app.use('/api/v1/', router);
        bookRoutes(router);
        
        res.status(404).json({
            erro: 'Not Found',
            status: 404,
            mensagem: 'A rota solicitada não foi encontrada!'
        });
    });
}