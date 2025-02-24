import { Author } from "../models/author";
import { IAuthorRepository } from "./interfaces/interfaceAuthorRepository";

export class AuthorRepository implements IAuthorRepository {
    async create(author: Author): Promise<Author> {
        throw new Error("Method not implemented.");
    }
    
}