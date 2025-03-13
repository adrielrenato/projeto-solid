import { Controller } from "../../interfaces/controller";
import { HttpRequest, HttpResponse } from "../../interfaces/http";
import { Validation } from "../../interfaces/validation";
import { IAuthRepository } from "../../repositories/interfaces/interfaceAuthRepository";
import { IUserRepository } from "../../repositories/interfaces/interfaceUserRepository";
import { badRequest, conflict, created, serverError } from "../../utils/httpResponses/httpResponse";

export class RegisterUserController implements Controller {
    constructor(
        private readonly authRepository: IAuthRepository,
        private readonly validation: Validation,
        private readonly userRepository: IUserRepository
    ) {}

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validation.validate(httpRequest.body);

            if (error) {
                return badRequest(error);
            }

            let { username, email, password } = httpRequest.body;
            username = username?.toLowerCase();
            email = email?.toLowerCase();

            const userExists = await this.userRepository.getByColumn([
                { email: email },
                { username: username }
            ]);

            if (userExists) {
                return conflict('Email ou username já cadastrados!');
            }

            const user = await this.authRepository.register({ username, email, password });

            return created(user);
        } catch(error: any) {
            return serverError(error);
        }
    }
    
}