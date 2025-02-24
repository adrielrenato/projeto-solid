import { Controller } from "../../interfaces/controller";
import { IAuthRepository } from "../../repositories/interfaces/interfaceAuthRepository";

export class ListAuthorController implements Controller {
    constructor(private readonly authorRepository: IAuthRepository) {}
    
}