import express from "express"; //executa o projeto
import { config } from "dotenv";

import router from "./routes/index.routes.js";
import movieRouter from './routes/movie.routes.js';

config(); // Carrega variáveis de ambiente do arquivo .env
const port = process.env.PORT || 5081;

// Inicializa o Express
const app = express();

app.use(express.json()); // Parse de JSON

// Rota base para verificar se o servidor está rodando
app.get("/", router);

app.use('/movies', movieRouter);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});