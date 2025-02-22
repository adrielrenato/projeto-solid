import { DeleteResult } from "typeorm";
import { Book } from "../../models/book";

export interface IBookRepository {
    create(book: Book): Promise<Book>;
    delete(id: string): Promise<DeleteResult>;
}