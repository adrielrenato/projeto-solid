import { DeleteBookController } from "../../controllers/books/deleteBookController";
import { LogErrorControllerDecorator } from "../../decorators/logError";
import { BookRepository } from "../../repositories/bookRepository"
import LogErrorRepository from "../../repositories/logErrorRepository";

export const deleteBookControllerFactory = () => {
    const deleteBookController = new DeleteBookController(new BookRepository());

    return new LogErrorControllerDecorator(
        deleteBookController, 
        new LogErrorRepository()
    );
}