import { User } from "../../models/user";

export interface IUserRepository {
    getByColumn(where: object): Promise<User | null>;
}