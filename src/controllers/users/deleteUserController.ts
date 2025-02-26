import { Controller } from "../../interfaces/controller";
import { HttpRequest, HttpResponse } from "../../interfaces/http";
import { IUserRepository } from "../../repositories/interfaces/interfaceUserRepository";
import { noContent, notFound, serverError } from "../../utils/httpResponses/httpResponse";

export class DeleteUserController implements Controller {
    constructor(private readonly userRepository: IUserRepository) { }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const { id } = httpRequest.params;
            const userExists = await this.userRepository.delete(id);

            if (!userExists.affected) {
                return notFound('Usuario');
            }

            return noContent();
        } catch (error: any) {
            return serverError(error);
        }
    }
}