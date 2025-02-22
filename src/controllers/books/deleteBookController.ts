import { Controller } from "../../interfaces/controller";
import { HttpRequest, HttpResponse } from "../../interfaces/http";
import { IBookRepository } from "../../repositories/interfaces/interfaceBookRepository";

export class DeleteBookController implements Controller {
    constructor(private readonly bookRepository: IBookRepository) {}
    handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        throw new Error("Method not implemented.");
    }
}