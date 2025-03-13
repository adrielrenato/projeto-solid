import { UpdateUserController } from "../../controllers/users/updateUserController";
import { LogErrorControllerDecorator } from "../../decorators/logError";
import LogErrorRepository from "../../repositories/logErrorRepository";
import { UserRepository } from "../../repositories/userRepository";
import { updateUserValidationFactory } from "./updateUserValidationFactory";

export const updateUserControllerFactory = () => {
    const updateUserController = new UpdateUserController(
        new UserRepository(),
        updateUserValidationFactory()
    );

    return new LogErrorControllerDecorator(
        updateUserController,
        new LogErrorRepository()
    );
}