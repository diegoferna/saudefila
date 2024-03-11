import { Evento } from "./evento";
const BASE_URL = "http://localhost:3333";

export async function criarEndereco(endereco: Evento) {
    try {
      const response = await fetch(`${BASE_URL}/evento`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(endereco),
      });
      if (!response.ok) {
        throw new Error("Erro ao criar motivo");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  export async function listarEventos(){
    try {
      const response = await fetch('${BASE_URL}/evento')
      if(!response){
        throw new Error("Erro ao buscar por eventos");
      }
      const data = await response.json();
      return data;
    }catch(error){
      console.error(error);
    }
  }