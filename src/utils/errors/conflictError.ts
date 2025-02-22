export class ConflictError extends Error {
    constructor(paramName: string) {
        super(`${paramName} já existente`);
        this.name = 'ConflictError';
    }
}