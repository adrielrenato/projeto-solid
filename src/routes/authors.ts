import { Router } from "express";
import { expressRouteAdapter } from "../adapters/expressRouteAdapter";
import { addAuthorControllerFactory } from "../factories/authors/addAuthorControllerFactory";

export default (router: Router): void => {
    router.post('/authors', expressRouteAdapter(addAuthorControllerFactory()));
}