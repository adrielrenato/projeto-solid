import dotenv from "dotenv";
import "reflect-metadata";
import app from "./app";
import { AppDataSources } from "./database/data-source";

dotenv.config();

const port = process.env.PORT || 3333;

AppDataSources.initialize()
    .then(() => console.log('Banco de dados conectado'))
    .catch((error) => {
        console.error("Erro ao conectar ao banco de dados:", error);
        process.exit(1);
    });

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
