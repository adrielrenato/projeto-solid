import { DeleteAuthorController } from "../../controllers/authors/deleteAuthorController";
import { LogErrorControllerDecorator } from "../../decorators/logError";
import { AuthorRepository } from "../../repositories/authorRepository";
import LogErrorRepository from "../../repositories/logErrorRepository";

export const deleteAuthorControllerFactory = () => {
    const deleteAuthorController = new DeleteAuthorController(new AuthorRepository());

    return new LogErrorControllerDecorator(
        deleteAuthorController, 
        new LogErrorRepository()
    );
}