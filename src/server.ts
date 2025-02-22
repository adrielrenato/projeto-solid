import "reflect-metadata";
import app from "./app";
import { AppDataSources } from "./database/data-source";

const port = process.env.PORT || 3333;

AppDataSources.initialize()
    .then(() => console.log('Banco de dados conectado'))
    .catch((error) => console.log(error));

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});