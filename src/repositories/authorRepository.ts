import { UpdateResult } from "typeorm";
import { AppDataSources } from "../database/data-source";
import { Author } from "../models/author";
import { IAuthorRepository } from "./interfaces/interfaceAuthorRepository";
import { DeleteResult } from "typeorm/browser";

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

    async update(id: string, author: Author): Promise<UpdateResult> {
            const updateField: Author = {};
        
            if (author.name) {
                updateField.name = author.name;
            }
        
            if (author.nationality) {
                updateField.nationality = author.nationality;
            }
        
            return await this.authorRepository.update(id, updateField);
        }    
    
        async delete(id: string): Promise<DeleteResult> {
                return await this.authorRepository.delete(id);
            }
}