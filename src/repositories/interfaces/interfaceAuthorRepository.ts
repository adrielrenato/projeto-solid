import { Author } from "../../models/author";

export interface IAuthorRepository {
    create(author: Author): Promise<Author>;
}