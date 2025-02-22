import { AppDataSources } from "../database/data-source";
import { Book } from "../models/book";
import { IBookRepository } from "./interfaces/interfaceBookRepository";

export class BookRepository implements IBookRepository {
    private readonly bookRepository = AppDataSources.getRepository(Book);

    async list(): Promise<Book[] | null> {
        return await this.bookRepository.find();
    }

    async create(book: Book): Promise<Book> {
        return await this.bookRepository.save(book);
    }

}