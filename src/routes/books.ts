import { Router } from "express";
import { expressRouteAdapter } from "../adapters/expressRouteAdapter";
import { addBookControllerFactory } from "../factories/books/addBookControllerFactory";

export default (router: Router): void => {
    router.get('/books');
    router.post('/books', expressRouteAdapter(addBookControllerFactory()));
    router.get('/books/:id');
    router.put('/books/:id');
    router.delete('/books/:id');
}