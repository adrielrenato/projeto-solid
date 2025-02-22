import { Validation } from "../../interfaces/validation";
import { RequiredFieldValidation } from "../../validations/requiredFieldValidation";
import { ValidationComposite } from "../../validations/validationComposite";

export const addBookValidationFactory = (): ValidationComposite => {
    const validations: Validation[] = [];

    validations.push(new RequiredFieldValidation('name'));
    validations.push(new RequiredFieldValidation('description'));

    return new ValidationComposite(validations);
}