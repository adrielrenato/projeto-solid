import { Router } from "express";
import { expressRouteAdapter } from "../adapters/expressRouteAdapter";
import { listUserControllerFactory } from "../factories/users/listAuthorControllerFactory";
import { getByIdUserControllerFactory } from "../factories/users/getByIdUserControllerFactory";
import { updateUserControllerFactory } from "../factories/users/updateUserControllerFactory";
import { deleteUserControllerFactory } from "../factories/users/deleteUserControllerFactory";

export default (router: Router): void => {
    router.get('/users', expressRouteAdapter(listUserControllerFactory()));
    router.get('/users/:id', expressRouteAdapter(getByIdUserControllerFactory()));
    router.put('/users/:id', expressRouteAdapter(updateUserControllerFactory()));
    router.delete('/users/:id', expressRouteAdapter(deleteUserControllerFactory()));
}