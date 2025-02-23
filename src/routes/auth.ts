import { Router } from "express";
import { expressRouteAdapter } from "../adapters/expressRouteAdapter";
import { registerUserControllerFactory } from "../factories/auth/registerUserControllerFactory";

export default (router: Router): void => {
    router.post('/register', expressRouteAdapter(registerUserControllerFactory()));
}