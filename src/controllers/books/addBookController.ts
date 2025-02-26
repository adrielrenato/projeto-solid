import { Controller } from "../../interfaces/controller";
import { HttpRequest, HttpResponse } from "../../interfaces/http";
import { Validation } from "../../interfaces/validation";
import { IBookRepository } from "../../repositories/interfaces/interfaceBookRepository";
import { badRequest, created, serverError } from "../../utils/httpResponses/httpResponse";

export class AddBookController implements Controller {
    constructor(
        private readonly bookRepository: IBookRepository, 
        private readonly validation: Validation
    ) {}

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validation.validate(httpRequest.body);

            if (error) {
                return badRequest(error);
            }

            const { name, description, author } = httpRequest.body;

            const book = await this.bookRepository.create({ name, description, author });
            
            return created(book);
        } catch(error: any) {
            return serverError(error);
        }
    }

}