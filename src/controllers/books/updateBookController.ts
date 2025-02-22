import { Controller } from "../../interfaces/controller";
import { HttpRequest, HttpResponse } from "../../interfaces/http";
import { IBookRepository } from "../../repositories/interfaces/interfaceBookRepository";
import { noContent, notFound, serverError } from "../../utils/httpResponses/httpResponse";

export class UpdateBookController implements Controller {
    constructor(private readonly bookRepository: IBookRepository) {}

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const { id } = httpRequest.params;
            const { name, description } = httpRequest.body;
            const bookExists = await this.bookRepository.update(id, { name, description });

            if (!bookExists.affected) {
                return notFound('Livro');
            }

            return noContent();
        } catch(error: any) {
            return serverError(error);
        }
    }
}