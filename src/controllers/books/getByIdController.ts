import { Controller } from "../../interfaces/controller";
import { HttpRequest, HttpResponse } from "../../interfaces/http";
import { IBookRepository } from "../../repositories/interfaces/interfaceBookRepository";
import { notFound, ok, serverError } from "../../utils/httpResponses/httpResponse";

export class GetByIdController implements Controller {
    constructor(private readonly bookRepository: IBookRepository) {}

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const { id } = httpRequest.params;

            const bookExists = await this.bookRepository.getById(id);

            if (!bookExists) {
                return notFound('Livro não encontrado');
            }

            return ok(bookExists);
        } catch(error: any) {
            return serverError(error);
        }
    }
    
}