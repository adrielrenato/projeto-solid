import { ListUserController } from "../../controllers/users/listUserController";
import { LogErrorControllerDecorator } from "../../decorators/logError";
import LogErrorRepository from "../../repositories/logErrorRepository";
import { UserRepository } from "../../repositories/userRepository";

export const listUserControllerFactory = () => {
    const listUserController = new ListUserController(new UserRepository());

    return new LogErrorControllerDecorator(
        listUserController,
        new LogErrorRepository()
    );
}