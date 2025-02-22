import { GetByIdController } from "../../controllers/books/getByIdController";
import { LogErrorControllerDecorator } from "../../decorators/logError"
import { BookRepository } from "../../repositories/bookRepository";
import LogErrorRepository from "../../repositories/logErrorRepository";

export const getByIdBookControllerFactory = () => {
    const getByIdController = new GetByIdController(new BookRepository());

    return new LogErrorControllerDecorator(
        getByIdController, 
        new LogErrorRepository()
    );
}