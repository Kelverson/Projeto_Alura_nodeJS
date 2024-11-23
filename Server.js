import express from "express"; // Importa as dependências necessárias: express para criar o servidor web e json para lidar com requisições JSON.
import routes from "./src/routes/postsRoutes.js";

const app = express(); // Cria uma instância do servidor express.
app.use(express.static("uploads"));
routes(app);

app.listen(3000, () => { // Inicia o servidor na porta 3000.
    console.log("Servidor escutando..."); // Imprime uma mensagem no console indicando que o servidor está ativo.
});