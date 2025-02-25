import { Not } from "typeorm";
import { Controller } from "../../interfaces/controller";
import { HttpRequest, HttpResponse } from "../../interfaces/http";
import { Validation } from "../../interfaces/validation";
import { User } from "../../models/user";
import { IUserRepository } from "../../repositories/interfaces/interfaceUserRepository";
import { badRequest, conflict, noContent, notFound, serverError } from "../../utils/httpResponses/httpResponse";

export class UpdateUserController implements Controller {
    constructor(
        private readonly userRepository: IUserRepository,
        private readonly validation: Validation
    ) { }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validation.validate(httpRequest.body);

            if (error) {
                return badRequest(error);
            }

            const { id } = httpRequest.params;
            const { email, password, username }: User = httpRequest.body;

            const userExists = await this.userRepository
                .searchUserByEmailOrUsernameWithId({ id, email, username });

            if (userExists) {
                return conflict('Email ou username já cadastrados!');
            }

            const userUpdated = await this.userRepository.update(id, { email, password, username });

            if (!userUpdated.affected) {
                return notFound('Usuario');
            }

            return noContent();
        } catch (error: any) {
            return serverError(error);
        }
    }
}