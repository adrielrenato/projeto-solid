import { AppDataSources } from "../database/data-source";
import { User } from "../models/user";
import { IAuthRepository } from "./interfaces/interfaceAuthRepository";
import bcryptjs from "bcryptjs";

export class AuthRepository implements IAuthRepository {
    private readonly authRepository = AppDataSources.getRepository(User);

    async login(usernameOrEmail: string, password: string): Promise<string> {
        throw new Error("Method not implemented.");
    }

    async register(user: User): Promise<User> {
        user.password = await bcryptjs.hash(user.password as string, 8);
        
        const userCreated = await this.authRepository.save(user);
        delete userCreated.password;

        return userCreated;
    }
    
}