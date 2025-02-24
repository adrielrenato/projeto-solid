import { Router } from "express";
import { expressRouteAdapter } from "../adapters/expressRouteAdapter";
import { addAuthorControllerFactory } from "../factories/authors/addAuthorControllerFactory";
import { listAuthorControllerFactory } from "../factories/authors/listAuthorControllerFactory";

export default (router: Router): void => {
    router.post('/authors', expressRouteAdapter(addAuthorControllerFactory()));
    router.get('/authors', expressRouteAdapter(listAuthorControllerFactory()));
}