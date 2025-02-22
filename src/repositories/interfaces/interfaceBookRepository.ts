import { DeleteResult } from "typeorm";
import { Book } from "../../models/book";

export interface IBookRepository {
    list(): Promise<Book[] | null>;
    create(book: Book): Promise<Book>;
    delete(id: string): Promise<DeleteResult>;
}