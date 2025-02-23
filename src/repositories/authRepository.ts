import { AppDataSources } from "../database/data-source";
import { User } from "../models/user";
import { IAuthRepository } from "./interfaces/interfaceAuthRepository";

export class AuthRepository implements IAuthRepository {
    private readonly authRepository = AppDataSources.getRepository(User);

    async login(usernameOrEmail: string, password: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async register(user: User): Promise<User> {
        throw new Error("Method not implemented.");
    }

}