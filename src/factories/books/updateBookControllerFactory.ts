import { UpdateBookController } from "../../controllers/books/updateBookController";
import { LogErrorControllerDecorator } from "../../decorators/logError";
import { BookRepository } from "../../repositories/bookRepository"
import LogErrorRepository from "../../repositories/logErrorRepository";

export const updateBookControllerFactory = () => {
    const updateBookController = new UpdateBookController(new BookRepository());

    return new LogErrorControllerDecorator(
        updateBookController,
        new LogErrorRepository()
    );
}