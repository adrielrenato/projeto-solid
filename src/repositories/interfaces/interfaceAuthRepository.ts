import { User } from "../../models/user";

export interface IAuthRepository {
    login(usernameOrEmail: string, password: string): Promise<void>;
    register(user: User): Promise<User>;
}