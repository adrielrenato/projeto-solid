import { Validation } from "../interfaces/validation";

export class StrongPasswordValidation implements Validation {
    constructor() {}

    validate(input: any): Error | void {
        const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (input['password'] && !strongPasswordRegex.test(input['password'])) {
            return new Error('Sua senha precisa ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula, um número e um caractere especial (@, $, !, %, *, ?, &).')
        }
    }
}