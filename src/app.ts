import express from "express";
import { configureRoutes } from "./routes/routes";

const app = express();

app.use(express.json());
configureRoutes(app);

export default app;