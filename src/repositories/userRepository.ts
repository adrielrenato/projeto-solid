import { AppDataSources } from "../database/data-source";
import { User } from "../models/user";
import { IUserRepository } from "./interfaces/interfaceUserRepository";

export class UserRepository implements IUserRepository {
    private readonly userRepository = AppDataSources.getRepository(User);

    async getByColumn(where: object): Promise<User | null> {
        return await this.userRepository.findOneBy(where);
    }
    
}