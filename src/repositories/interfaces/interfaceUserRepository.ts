import { UpdateResult } from "typeorm";
import { User } from "../../models/user";

export interface IUserRepository {
    getByColumn(where: object): Promise<User | null>;
    searchUserByEmailOrUsernameWithId({ id, email, username }: User): Promise<User | null>;
    list(): Promise<User[] | null>;
    getById(id: string): Promise<User | null>;
    update(id: string, user: User): Promise<UpdateResult>;
}