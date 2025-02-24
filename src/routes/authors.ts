import { Router } from "express";
import { expressRouteAdapter } from "../adapters/expressRouteAdapter";
import { addAuthorControllerFactory } from "../factories/authors/addAuthorControllerFactory";
import { listAuthorControllerFactory } from "../factories/authors/listAuthorControllerFactory";
import { getByIdAuthorControllerFactory } from "../factories/authors/getByIdAuthorControllerFactory";
import { updateAuthorControllerFactory } from "../factories/authors/updateAuthorControllerFactory";
import { deleteAuthorControllerFactory } from "../factories/authors/deleteAuthorControllerFactory";

export default (router: Router): void => {
    router.post('/authors', expressRouteAdapter(addAuthorControllerFactory()));
    router.get('/authors', expressRouteAdapter(listAuthorControllerFactory()));
    router.get('/authors/:id', expressRouteAdapter(getByIdAuthorControllerFactory()));
    router.put('/authors/:id', expressRouteAdapter(updateAuthorControllerFactory()));
    router.delete('/authors/:id', expressRouteAdapter(deleteAuthorControllerFactory()));
}