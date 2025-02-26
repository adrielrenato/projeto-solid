import { Controller } from "../../interfaces/controller";
import { HttpRequest, HttpResponse } from "../../interfaces/http";
import { Validation } from "../../interfaces/validation";
import { IAuthRepository } from "../../repositories/interfaces/interfaceAuthRepository";
import { IUserRepository } from "../../repositories/interfaces/interfaceUserRepository";
import { badRequest, notFound, ok, serverError, unanthorized } from "../../utils/httpResponses/httpResponse";

export class LoginController implements Controller {
    constructor(
        private readonly authRepository: IAuthRepository,
        private readonly validation: Validation,
        private readonly userRepository: IUserRepository
    ) { }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validation.validate(httpRequest.body);

            if (error) {
                return badRequest(error);
            }

            const { usernameOrEmail, password } = httpRequest.body;

            const userExists = await this.userRepository.getByColumn({
                where: [
                    { email: usernameOrEmail },
                    { username: usernameOrEmail }
                ],
                select: ["id", "username", "email", "password"],
            });

            if (!userExists) {
                return notFound('Usuario');
            }

            const userLogged = await this.authRepository.login(userExists, password);

            if (userLogged instanceof Error) {
                return unanthorized(userLogged.message);
            }

            return ok(userLogged);
        } catch(error: any) {
            return serverError(error);
        }
    }
    
}