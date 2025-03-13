import { Controller } from "../../interfaces/controller";
import { HttpRequest, HttpResponse } from "../../interfaces/http";
import { IUserRepository } from "../../repositories/interfaces/interfaceUserRepository";
import { notFound, ok, serverError } from "../../utils/httpResponses/httpResponse";

export class GetByIdUserController implements Controller {
    constructor(private readonly userRepository: IUserRepository) {}

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const { id } = httpRequest.params;

            const userExists = await this.userRepository.getById(id);

            if (!userExists) {
                return notFound('Usuario não encontrado');
            }

            return ok(userExists);
        } catch(error: any) {
            return serverError(error);
        }
    }
    
}