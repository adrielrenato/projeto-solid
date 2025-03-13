import { Controller } from "../../interfaces/controller";
import { HttpRequest, HttpResponse } from "../../interfaces/http";
import { IUserRepository } from "../../repositories/interfaces/interfaceUserRepository";
import { ok, serverError } from "../../utils/httpResponses/httpResponse";

export class ListUserController implements Controller {
    constructor(private readonly userRepository: IUserRepository) {}

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const users = await this.userRepository.list();

            return ok(users);
        } catch(error: any) {
            return serverError(error);
        }
    }
    
}