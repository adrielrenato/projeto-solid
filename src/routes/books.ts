import { Router } from "express";
import { expressRouteAdapter } from "../adapters/expressRouteAdapter";
import { addBookControllerFactory } from "../factories/books/addBookControllerFactory";
import { listBookControllerFactory } from "../factories/books/listBookControllerFactory";

export default (router: Router): void => {
    router.get('/books', expressRouteAdapter(listBookControllerFactory()));
    router.post('/books', expressRouteAdapter(addBookControllerFactory()));
    router.get('/books/:id');
    router.put('/books/:id');
    router.delete('/books/:id');
}