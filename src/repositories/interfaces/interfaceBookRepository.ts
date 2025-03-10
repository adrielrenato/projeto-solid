import { Book } from "../../models/book";

export interface IBookRepository {
    create(book: Book): Promise<Book>;
}