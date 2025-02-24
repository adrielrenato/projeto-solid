import { LogErrorControllerDecorator } from "../../decorators/logError";
import { AuthorRepository } from "../../repositories/authorRepository"
import LogErrorRepository from "../../repositories/logErrorRepository";

export const listAuthorControllerFactory = () => {
    const listAuthorController = new listAuthorController(new AuthorRepository());

    return new LogErrorControllerDecorator(
        listAuthorController,
        new LogErrorRepository()
    );
}