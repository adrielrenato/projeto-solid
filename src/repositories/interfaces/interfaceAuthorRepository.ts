import { UpdateResult } from "typeorm";
import { Author } from "../../models/author";

export interface IAuthorRepository {
    list(): Promise<Author[] | null>;
    getById(id: string): Promise<Author | null>;
    create(author: Author): Promise<Author>;
    update(id: string, book: Author): Promise<UpdateResult>;
}