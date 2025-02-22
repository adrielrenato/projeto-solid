import { DataSource } from "typeorm";

export const AppDataSources = new DataSource({
    type: 'sqlite',
    database: './src/database/database.sqlite',
    synchronize: true,
    logging: true,
    entities: [__dirname + '/../models/**/*.js'],
    migrations: [],
    subscribers: []
});