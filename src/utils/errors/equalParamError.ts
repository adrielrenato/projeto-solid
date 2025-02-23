export class EqualParamError extends Error {
    constructor(paramError: string) {
        super(`O campo ${paramError} é diferente do campo confirmation_${paramError}`);
        this.name = "EqualParamError";
    }
}