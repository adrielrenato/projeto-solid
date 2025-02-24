import { Controller } from "../../interfaces/controller";
import { HttpRequest, HttpResponse } from "../../interfaces/http";
import { Validation } from "../../interfaces/validation";
import { IAuthorRepository } from "../../repositories/interfaces/interfaceAuthorRepository";

export class AddAuthorController implements Controller {
    constructor(
        private readonly authorRepository: IAuthorRepository, 
        private readonly validation: Validation
    ) { }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        throw new Error("Method not implemented.");
    }
    
}