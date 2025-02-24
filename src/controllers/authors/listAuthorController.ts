import { Controller } from "../../interfaces/controller";
import { HttpRequest, HttpResponse } from "../../interfaces/http";
import { IAuthRepository } from "../../repositories/interfaces/interfaceAuthRepository";
import { ok, serverError } from "../../utils/httpResponses/httpResponse";

export class ListAuthorController implements Controller {
    constructor(private readonly authorRepository: IAuthRepository) {}

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
            try {
                const authors = await this.authorRepository.list();
    
                return ok(authors);
            } catch(error: any) {
                return serverError(error);
            }
        }
}