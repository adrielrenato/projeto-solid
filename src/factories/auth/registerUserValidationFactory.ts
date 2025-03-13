import { Validation } from "../../interfaces/validation";
import { EmailValidValidation } from "../../validations/emailValidValidation";
import { EqualFieldValidation } from "../../validations/equalFieldValidation";
import { RequiredFieldValidation } from "../../validations/requiredFieldValidation";
import { StringWithoutSpaceValidation } from "../../validations/stringWithoutSpaceValidation";
import { StrongPasswordValidation } from "../../validations/strongPasswordValidation";
import { ValidationComposite } from "../../validations/validationComposite";

export const registerUserValidationFactory = (): ValidationComposite => {
    const validations: Validation[] = [];

    validations.push(new RequiredFieldValidation('username'));
    validations.push(new RequiredFieldValidation('email'));
    validations.push(new RequiredFieldValidation('password'));
    validations.push(new RequiredFieldValidation('confirmation_password'));
    
    validations.push(new EqualFieldValidation('password'));
    validations.push(new StrongPasswordValidation());
    validations.push(new EmailValidValidation());
    validations.push(new StringWithoutSpaceValidation('username'));

    return new ValidationComposite(validations);
}