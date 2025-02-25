import { Controller } from "../../interfaces/controller";
import { HttpRequest, HttpResponse } from "../../interfaces/http";
import { Author } from "../../models/author";
import { IAuthorRepository } from "../../repositories/interfaces/interfaceAuthorRepository";
import { noContent, notFound, serverError } from "../../utils/httpResponses/httpResponse";

export class UpdateAuthorController implements Controller {
    constructor(private readonly authorRepository: IAuthorRepository) {}

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const { id } = httpRequest.params;
            const { name, nationality }: Author = httpRequest.body;
            const authorExists = await this.authorRepository.update(id, { name, nationality });

            if (!authorExists.affected) {
                return notFound('Autor');
            }

            return noContent();
        } catch(error: any) {
            return serverError(error);
        }
    }
}