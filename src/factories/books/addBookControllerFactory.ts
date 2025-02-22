import { AddBookController } from "../../controllers/books/addBookController"
import { LogErrorControllerDecorator } from "../../decorators/logError";
import { BookRepository } from "../../repositories/bookRepository"
import LogErrorRepository from "../../repositories/logErrorRepository";
import { addBookValidationFactory } from "./addBookValidationFactory"

export const addBookControllerFactory = () => {
    const addBookController = new AddBookController(
        new BookRepository(), 
        addBookValidationFactory()
    );

    return new LogErrorControllerDecorator(
        addBookController, 
        new LogErrorRepository()
    );
}