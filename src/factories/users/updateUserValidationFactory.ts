import { Validation } from "../../interfaces/validation";
import { EmailValidValidation } from "../../validations/emailValidValidation";
import { EqualFieldValidation } from "../../validations/equalFieldValidation";
import { StringWithoutSpaceValidation } from "../../validations/stringWithoutSpaceValidation";
import { StrongPasswordValidation } from "../../validations/strongPasswordValidation";
import { ValidationComposite } from "../../validations/validationComposite";

export const updateUserValidationFactory = (): ValidationComposite => {
    const validations: Validation[] = [];

    validations.push(new EqualFieldValidation('password'));
    validations.push(new StrongPasswordValidation());
    validations.push(new EmailValidValidation());
    validations.push(new StringWithoutSpaceValidation('username'));

    return new ValidationComposite(validations);
}