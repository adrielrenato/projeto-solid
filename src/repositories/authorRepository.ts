import { AppDataSources } from "../database/data-source";
import { Author } from "../models/author";
import { IAuthorRepository } from "./interfaces/interfaceAuthorRepository";

export class AuthorRepository implements IAuthorRepository {
    private readonly authorRepository = AppDataSources.getRepository(Author);

    async list(): Promise<Author[] | null> {
        return await this.authorRepository.find(); 
    }

     async getById(id: string): Promise<Author | null> {
            return await this.authorRepository.findOneBy({ id });
        }

    async create(author: Author): Promise<Author> {
        return await this.authorRepository.save(author);
    }
    
}