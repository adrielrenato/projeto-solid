import { Validation } from "../../interfaces/validation";
import { EqualFieldValidation } from "../../validations/equalFieldValidation";
import { RequiredFieldValidation } from "../../validations/requiredFieldValidation";
import { StrongPasswordValidation } from "../../validations/strongPasswordValidation";
import { ValidationComposite } from "../../validations/validationComposite";

export const registerUserValidationFactory = (): ValidationComposite => {
    const validations: Validation[] = [];

    validations.push(new RequiredFieldValidation('name'));
    validations.push(new RequiredFieldValidation('username'));
    validations.push(new RequiredFieldValidation('email'));
    validations.push(new RequiredFieldValidation('password'));
    validations.push(new RequiredFieldValidation('confirmation_password'));
    
    validations.push(new EqualFieldValidation('password'));
    validations.push(new StrongPasswordValidation());

    return new ValidationComposite(validations);
}