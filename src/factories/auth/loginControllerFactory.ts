import { AuthRepository } from '../../repositories/authRepository';
import { UserRepository } from '../../repositories/userRepository';
import { loginValidationFactory } from './loginValidationFactory';
import { LogErrorControllerDecorator } from '../../decorators/logError';
import LogErrorRepository from '../../repositories/logErrorRepository';
import { LoginController } from '../../controllers/auth/loginController';

export const loginControllerFactory = () => {
    const loginController = new LoginController(
        new AuthRepository(),
        loginValidationFactory(),
        new UserRepository()
    );

    return new LogErrorControllerDecorator(
        loginController, 
        new LogErrorRepository()
    );
}