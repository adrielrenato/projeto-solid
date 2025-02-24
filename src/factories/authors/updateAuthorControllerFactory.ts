import { UpdateAuthorController } from "../../controllers/authors/updateAuthorController";
import { LogErrorControllerDecorator } from "../../decorators/logError";
import { AuthorRepository } from "../../repositories/authorRepository";
import LogErrorRepository from "../../repositories/logErrorRepository";

export const updateAuthorControllerFactory = () => {
    const updateAuthorController = new UpdateAuthorController(new AuthorRepository());

    return new LogErrorControllerDecorator(
        updateAuthorController,
        new LogErrorRepository()
    );
}