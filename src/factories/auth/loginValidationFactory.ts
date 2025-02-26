import { Validation } from "../../interfaces/validation";
import { RequiredFieldValidation } from "../../validations/requiredFieldValidation";
import { ValidationComposite } from "../../validations/validationComposite";

export const loginValidationFactory = (): ValidationComposite => {
    const validations: Validation[] = [];

    validations.push(new RequiredFieldValidation('usernameOrEmail'));
    validations.push(new RequiredFieldValidation('password'));

    return new ValidationComposite(validations);
}