import { AppDataSources } from "../database/data-source";
import { LogError } from "../models/logError";
import { ILogErrorRepository } from "./interfaces/interfaceLogErrorRepository";

export default class LogErrorRepository implements ILogErrorRepository {
    async logError(stack: string): Promise<void> {
        const errorRepository = AppDataSources.getRepository(LogError);
        await errorRepository.save({ stack });
    }
    
}