import { GetByIdUserController } from "../../controllers/users/getByIdUserController";
import { LogErrorControllerDecorator } from "../../decorators/logError";
import LogErrorRepository from "../../repositories/logErrorRepository";
import { UserRepository } from "../../repositories/userRepository";

export const getByIdUserControllerFactory = () => {
    const getByIdController = new GetByIdUserController(new UserRepository());

    return new LogErrorControllerDecorator(
        getByIdController, 
        new LogErrorRepository()
    );
}