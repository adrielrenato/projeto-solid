import { AppDataSources } from "../database/data-source";
import { Author } from "../models/author";
import { IAuthorRepository } from "./interfaces/interfaceAuthorRepository";

export class AuthorRepository implements IAuthorRepository {
    private readonly authorRepository = AppDataSources.getRepository(Author);

    async create(author: Author): Promise<Author> {
        return await this.authorRepository.save(author);
    }
    
}