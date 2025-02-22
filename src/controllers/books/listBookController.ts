import { Controller } from "../../interfaces/controller";
import { HttpRequest, HttpResponse } from "../../interfaces/http";
import { IBookRepository } from "../../repositories/interfaces/interfaceBookRepository";
import { ok, serverError } from "../../utils/httpResponses/httpResponse";

export class ListBookController implements Controller {
    constructor(private readonly bookRepository: IBookRepository) {}

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const books = this.bookRepository.list();

            return ok(books);
        } catch(error: any) {
            return serverError(error);
        }
    }
    
}