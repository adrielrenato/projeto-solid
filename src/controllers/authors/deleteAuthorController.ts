import { Controller } from "../../interfaces/controller";
import { HttpRequest, HttpResponse } from "../../interfaces/http";
import { IAuthorRepository } from "../../repositories/interfaces/interfaceAuthorRepository";
import { noContent, notFound, serverError } from "../../utils/httpResponses/httpResponse";

export class DeleteAuthorController implements Controller {
    constructor(private readonly authorRepository: IAuthorRepository) {}
    
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const { id } = httpRequest.params;
            const authorExists = await this.authorRepository.delete(id);

            if (!authorExists.affected) {
                return notFound('Autor');
            } 
            
            return noContent();
        } catch (error: any) {
            return serverError(error);
        }
    }
}