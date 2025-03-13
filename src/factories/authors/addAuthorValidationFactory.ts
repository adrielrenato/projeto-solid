import { Validation } from "../../interfaces/validation";
import { RequiredFieldValidation } from "../../validations/requiredFieldValidation";
import { ValidationComposite } from "../../validations/validationComposite";

export const addAuthorValidationFactory = (): ValidationComposite => {
    const validations: Validation[] = [];

    validations.push(new RequiredFieldValidation('name'));
    validations.push(new RequiredFieldValidation('nationality'));

    return new ValidationComposite(validations);
}