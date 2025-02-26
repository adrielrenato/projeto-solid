import { Validation } from "../interfaces/validation";
import { EqualParamError } from "../utils/errors/equalParamError";

export class EqualFieldValidation implements Validation {
    constructor(private readonly fieldName: string) {}

    validate(input: any): Error | void {
        if (input[this.fieldName] && input[this.fieldName] !== input[`confirmation_${this.fieldName}`]) {
            return new EqualParamError(this.fieldName);
        }
    }
}