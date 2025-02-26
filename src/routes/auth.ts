import { Router } from "express";
import { expressRouteAdapter } from "../adapters/expressRouteAdapter";
import { registerUserControllerFactory } from "../factories/auth/registerUserControllerFactory";
import { loginControllerFactory } from "../factories/auth/loginControllerFactory";

export default (router: Router): void => {
    router.post('/login', expressRouteAdapter(loginControllerFactory()));
    router.post('/register', expressRouteAdapter(registerUserControllerFactory()));
}