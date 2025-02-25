import { User } from "../../models/user";

export interface IAuthRepository {
    login(usernameOrEmail: string, password: string): Promise<string>;
    register(user: User): Promise<User>;
}