import { RegisterUserController } from "../../controllers/auth/registerUserController";
import { LogErrorControllerDecorator } from "../../decorators/logError";
import { AuthRepository } from "../../repositories/authRepository";
import LogErrorRepository from "../../repositories/logErrorRepository";
import { UserRepository } from "../../repositories/userRepository";
import { registerUserValidationFactory } from "./registerUserValidationFactory";

export const registerUserControllerFactory = () => {
    const registerUserController = new RegisterUserController(
        new AuthRepository(),
        registerUserValidationFactory(),
        new UserRepository()
    );

    return new LogErrorControllerDecorator(
        registerUserController, 
        new LogErrorRepository()
    );
}