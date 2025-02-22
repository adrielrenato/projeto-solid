import { DeleteResult, UpdateResult } from "typeorm";
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

     async update(id: string, book: Book): Promise<UpdateResult> {
        const updateField: Book = {};

        if (book.name) {
            updateField.name = book.name;
        }

        if (book.description) {
            updateField.description = book.description;
        }

        return await this.bookRepository.update(id, book);
    }

    async delete(id: string): Promise<DeleteResult> {
        return await this.bookRepository.delete(id);
    }
}