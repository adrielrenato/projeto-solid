import { User } from "../../models/user";

export interface IAuthRepository {
    login(user: User, password: string): Promise<Object | Error>;
    register(user: User): Promise<User>;
}