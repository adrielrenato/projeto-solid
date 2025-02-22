export class NotFoundError extends Error {
    constructor(paramName: string) {
        super(`${paramName} não encontrado!`);
        this.name = "NotFoundError";
    }
}