import { DeleteUserController } from "../../controllers/users/deleteUserController";
import { LogErrorControllerDecorator } from "../../decorators/logError";
import LogErrorRepository from "../../repositories/logErrorRepository";
import { UserRepository } from "../../repositories/userRepository";

export const deleteUserControllerFactory = () => {
    const deleteUserController = new DeleteUserController(new UserRepository());

    return new LogErrorControllerDecorator(
        deleteUserController,
        new LogErrorRepository()
    );
}