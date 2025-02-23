import { Controller } from "../../interfaces/controller";
import { HttpRequest, HttpResponse } from "../../interfaces/http";
import { Validation } from "../../interfaces/validation";
import { IAuthRepository } from "../../repositories/interfaces/interfaceAuthRepository";
import { badRequest, created, serverError } from "../../utils/httpResponses/httpResponse";

export class RegisterUserController implements Controller {
    constructor(
        private readonly authRepository: IAuthRepository,
        private readonly validation: Validation
    ) {}

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validation.validate(httpRequest.body);

            if (error) {
                return badRequest(error);
            }

            const { username, email, password } = httpRequest.body;

            const user = this.authRepository.register({ username, email, password });

            return created(user);
        } catch(error: any) {
            return serverError(error);
        }
    }
    
}