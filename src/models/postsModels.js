import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js"; // Importa a função para conectar ao banco de dados.

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO); // Conecta ao banco de dados usando a string de conexão armazenada na variável de ambiente STRING_CONEXAO.

export async function getTodosPosts() { // Define uma função assíncrona para buscar todos os posts.
    const db = conexao.db("TESTES"); // Seleciona o banco de dados "TESTES".
    const colecao = db.collection("posts"); // Seleciona a coleção "posts" dentro do banco de dados.
    return colecao.find().toArray(); // Busca todos os documentos da coleção e retorna um array.
}

export async function criarPost(novoPost){
    const db = conexao.db("TESTES"); // Seleciona o banco de dados "TESTES".
    const colecao = db.collection("posts"); // Seleciona a coleção "posts" dentro do banco de dados.
    return colecao.insertOne(novoPost); // Busca todos os documentos da coleção e retorna um array.
}

export async function atualizarPost(id, novoPost){
    const objId = ObjectId.createFromHexString(id);
    const db = conexao.db("TESTES"); // Seleciona o banco de dados "TESTES".
    const colecao = db.collection("posts"); // Seleciona a coleção "posts" dentro do banco de dados.
    return colecao.updateOne({_id: new ObjectId(objId)}, {$set:novoPost}); // Busca todos os documentos da coleção e retorna um array.
}
