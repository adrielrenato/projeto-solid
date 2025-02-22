import { Router } from "express";
import { expressRouteAdapter } from "../adapters/expressRouteAdapter";
import { addBookControllerFactory } from "../factories/books/addBookControllerFactory";
import { deleteBookControllerFactory } from "../factories/books/deleteBookControllerFactory";
import { listBookControllerFactory } from "../factories/books/listBookControllerFactory";
import { getByIdBookControllerFactory } from "../factories/books/getByIdBookControllerFactory";
import { updateBookControllerFactory } from "../factories/books/updateBookControllerFactory";

export default (router: Router): void => {
    router.get('/books', expressRouteAdapter(listBookControllerFactory()));
    router.post('/books', expressRouteAdapter(addBookControllerFactory()));
    router.get('/books/:id', expressRouteAdapter(getByIdBookControllerFactory()));
    router.put('/books/:id', expressRouteAdapter(updateBookControllerFactory()));
    router.delete('/books/:id', expressRouteAdapter(deleteBookControllerFactory()));
}