import { Validation } from "../interfaces/validation";

export class StringWithoutSpaceValidation implements Validation {
    constructor(private readonly fieldName: string) { }

    validate(input: any): Error | void {
        const fieldNameHasSpace = /\s/;

        if (input[this.fieldName] && fieldNameHasSpace.test(input[this.fieldName])) {
            return new Error(`O campo ${this.fieldName} não deve conter espaços.`);
        }
    }
    
}