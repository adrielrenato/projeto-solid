import { getByIdController } from "../../controllers/authors/getByIdController";
import { LogErrorControllerDecorator } from "../../decorators/logError"
import { AuthorRepository } from "../../repositories/authorRepository";
import LogErrorRepository from "../../repositories/logErrorRepository";

export const getByIdAuthorControllerFactory = () => {
    const GetByIdController = new getByIdController(new AuthorRepository());

    return new LogErrorControllerDecorator(
        GetByIdController, 
        new LogErrorRepository()
    );
}