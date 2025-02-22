export class MissingParamError extends Error {
    constructor(paramError: string) {
        super(`Campo não enviado ${paramError}`);
        this.name = "MissingParamError";
    }
}