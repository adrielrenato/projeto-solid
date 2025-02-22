import { Controller } from "../../interfaces/controller";
import { HttpRequest, HttpResponse } from "../../interfaces/http";
import { IBookRepository } from "../../repositories/interfaces/interfaceBookRepository";
import { noContent, notFound, serverError } from "../../utils/httpResponses/httpResponse";

export class DeleteBookController implements Controller {
    constructor(private readonly bookRepository: IBookRepository) {}
    
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const { id } = httpRequest.params;
            const bookExists = await this.bookRepository.delete(id);

            if (!bookExists) {
                return notFound('Livro');
            } 
            return noContent();
        } catch (error: any) {
            return serverError(error);
        }
    }
}