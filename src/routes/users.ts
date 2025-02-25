import { Router } from "express";
import { expressRouteAdapter } from "../adapters/expressRouteAdapter";
import { listUserControllerFactory } from "../factories/users/listAuthorControllerFactory";

export default (router: Router): void => {
    router.get('/users', expressRouteAdapter(listUserControllerFactory()));
    }