import { User } from "../../models/user";

export interface IAuthRepository {
    list(): unknown;
    login(usernameOrEmail: string, password: string): Promise<void>;
    register(user: User): Promise<User>;
}