import { DeleteResult } from "typeorm";
import { AppDataSources } from "../database/data-source";
import { Book } from "../models/book";
import { IBookRepository } from "./interfaces/interfaceBookRepository";

export class BookRepository implements IBookRepository {
    private readonly bookRepository = AppDataSources.getRepository(Book);

    async create(book: Book): Promise<Book> {
        return await this.bookRepository.save(book);
    }

    async delete(id: string): Promise<DeleteResult> {
        return await this.bookRepository.delete(id);
    }
}