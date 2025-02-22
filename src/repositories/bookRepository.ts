import { AppDataSources } from "../database/data-source";
import { Book } from "../models/book";
import { IBookRepository } from "./interfaces/interfaceBookRepository";

export class BookRepository implements IBookRepository {
    private readonly bookRepository = AppDataSources.getRepository(Book);

    list(): Promise<Book[] | null> {
        throw new Error("Method not implemented.");
    }

    async create(book: Book): Promise<Book> {
        return await this.bookRepository.save(book);
    }

}