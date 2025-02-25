import { Brackets, UpdateResult } from "typeorm";
import { AppDataSources } from "../database/data-source";
import { User } from "../models/user";
import { IUserRepository } from "./interfaces/interfaceUserRepository";
import bcryptjs from "bcryptjs";

export class UserRepository implements IUserRepository {
    private readonly userRepository = AppDataSources.getRepository(User);

    async list(): Promise<User[] | null> {
        return await this.userRepository.find();
    }

    async getById(id: string): Promise<User | null> {
        return await this.userRepository.findOneBy({ id });
    }

    async getByColumn(where: object): Promise<User | null> {
        return await this.userRepository.findOne(where);
    }

    async searchUserByEmailOrUsernameWithId({ id, email, username }: User) {
        return await this.userRepository.createQueryBuilder("user")
            .where("user.id != :id", { id })
            .andWhere(
                new Brackets(qb => {
                    qb.where("user.email = :email", { email })
                    .orWhere("user.username = :username", { username });
                })
            )
            .getOne();
    }

    async update(id: string, user: User): Promise<UpdateResult> {
        const updateField: User = {};

        if (user.email) {
            updateField.email = user.email;
        }

        if (user.password) {
            updateField.password = await bcryptjs.hash(user.password as string, 8);
        }

        if (user.username) {
            updateField.username = user.username;
        }

        return await this.userRepository.update(id, updateField);
    }

}