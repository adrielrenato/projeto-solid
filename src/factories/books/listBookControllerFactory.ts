import { ListBookController } from "../../controllers/books/listBookController";
import { LogErrorControllerDecorator } from "../../decorators/logError";
import { BookRepository } from "../../repositories/bookRepository";
import LogErrorRepository from "../../repositories/logErrorRepository";

export const listBookControllerFactory = () => {
    const listBookController = new ListBookController(new BookRepository());

    return new LogErrorControllerDecorator(
        listBookController, 
        new LogErrorRepository()
    );
}