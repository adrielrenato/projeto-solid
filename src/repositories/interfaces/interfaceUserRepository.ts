import { User } from "../../models/user";

export interface IUserRepository {
    getByColumn(where: object): Promise<User | null>;
    list(): Promise<User[] | null>;
    getById(id: string): Promise<User | null>;
}