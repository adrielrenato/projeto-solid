import { AppDataSources } from "../database/data-source";
import { User } from "../models/user";
import { IAuthRepository } from "./interfaces/interfaceAuthRepository";
import bcryptjs from "bcryptjs";
import jsonwebtoken from 'jsonwebtoken';

export class AuthRepository implements IAuthRepository {
    private readonly authRepository = AppDataSources.getRepository(User);

    async login(user: User, password: string): Promise<Object | Error> {
        const validPassword = await bcryptjs.compare(password, (user.password as string));

        if (!validPassword) {
            return new Error('Username/Email ou senha invalidos.');
        }

        const token = jsonwebtoken.sign({
            id: user.id, 
            username: user.username,
            email: user.email
        }, (process.env.SECRET_KEY as string), { expiresIn: '1h' });

        return { accessToken: token };
    }

    async register(user: User): Promise<User> {
        user.password = await bcryptjs.hash(user.password as string, 8);
        
        const userCreated = await this.authRepository.save(user);
        delete userCreated.password;

        return userCreated;
    }
    
}