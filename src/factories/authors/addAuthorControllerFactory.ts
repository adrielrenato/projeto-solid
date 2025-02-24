import { AddAuthorController } from "../../controllers/authors/addAuthorController";
import { LogErrorControllerDecorator } from "../../decorators/logError";
import { AuthorRepository } from "../../repositories/authorRepository";
import LogErrorRepository from "../../repositories/logErrorRepository";
import { addAuthorValidationFactory } from "./addAuthorValidationFactory";

export const addAuthorControllerFactory = () => {
    const addAuthorController = new AddAuthorController(
        new AuthorRepository(), 
        addAuthorValidationFactory()
    );

    return new LogErrorControllerDecorator(
        addAuthorController, 
        new LogErrorRepository()
    );
}