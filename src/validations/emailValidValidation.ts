import { Validation } from "../interfaces/validation";

export class EmailValidValidation implements Validation {
    validate(input: any): Error | void {
        const emailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (input['email'] && !emailValid.test(input['email'])) {
            return new Error('E-mail invalido');
        }
    }
    
}