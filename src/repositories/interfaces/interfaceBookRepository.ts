import { DeleteResult, UpdateResult } from "typeorm";
import { Book } from "../../models/book";

export interface IBookRepository {
    list(): Promise<Book[] | null>;
    getById(id: string): Promise<Book | null>;
    create(book: Book): Promise<Book>;
    update(id: string, book: Book): Promise<UpdateResult>;
    delete(id: string): Promise<DeleteResult>;
}