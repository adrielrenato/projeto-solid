import { Validation } from "../../interfaces/validation";
import { RequiredFieldValidation } from "../../validations/requiredFieldValidation";
import { ValidationComposite } from "../../validations/validationComposite";

export const registerUserValidationFactory = (): ValidationComposite => {
    const validations: Validation[] = [];

    validations.push(new RequiredFieldValidation('name'));
    validations.push(new RequiredFieldValidation('username'));
    validations.push(new RequiredFieldValidation('email'));
    validations.push(new RequiredFieldValidation('password'));
    validations.push(new RequiredFieldValidation('confirmation_password'));

    return new ValidationComposite(validations);
}