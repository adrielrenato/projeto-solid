import { Controller } from "../../interfaces/controller";
import { HttpRequest, HttpResponse } from "../../interfaces/http";
import { Validation } from "../../interfaces/validation";
import { Author } from "../../models/author";
import { IAuthorRepository } from "../../repositories/interfaces/interfaceAuthorRepository";
import { badRequest, created, serverError } from "../../utils/httpResponses/httpResponse";

export class AddAuthorController implements Controller {
    constructor(
        private readonly authorRepository: IAuthorRepository, 
        private readonly validation: Validation
    ) { }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validation.validate(httpRequest.body);

            if (error) {
                return badRequest(error);
            }

            const { name, nationality }: Author = httpRequest.body; 

            const author = await this.authorRepository.create({ name, nationality });

            return created(author);
        } catch(error: any) {
            return serverError(error);
        }
    }
    
}