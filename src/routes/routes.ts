import { Express, Router } from "express";
import bookRoutes from "./books";
import authRoutes from "./auth";
import authorRoutes from './authors';

export const configureRoutes = (app: Express): void => {
    const router = Router();
    app.use('/api/v1', router);

    app.use((req, res, next) => {
        app.use('/api/v1/', router);
        bookRoutes(router);
        authRoutes(router);
        authorRoutes(router);
        
        res.status(404).json({
            erro: 'Not Found',
            status: 404,
            mensagem: 'A rota solicitada não foi encontrada!'
        });
    });
}