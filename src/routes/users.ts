import { Router } from "express";
import { expressRouteAdapter } from "../adapters/expressRouteAdapter";
import { listUserControllerFactory } from "../factories/users/listAuthorControllerFactory";
import { getByIdUserControllerFactory } from "../factories/users/getByIdUserControllerFactory";

export default (router: Router): void => {
    router.get('/users', expressRouteAdapter(listUserControllerFactory()));
    router.get('/users/:id', expressRouteAdapter(getByIdUserControllerFactory()));
    }