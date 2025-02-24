import { Controller } from "../../interfaces/controller";
import { HttpRequest, HttpResponse } from "../../interfaces/http";
import { IAuthorRepository } from "../../repositories/interfaces/interfaceAuthorRepository";
import { notFound, ok, serverError } from "../../utils/httpResponses/httpResponse";

export class getByIdController implements Controller {
    constructor(private readonly authorRepository: IAuthorRepository) {}

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const { id } = httpRequest.params;

            const authorExists = await this.authorRepository.getById(id);

            if (!authorExists) {
                return notFound('Autor não encontrado');
            }

            return ok(authorExists);
        } catch(error: any) {
            return serverError(error);
        }
    }
    
}