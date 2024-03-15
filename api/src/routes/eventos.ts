import { FastifyInstance } from "fastify";
import { z } from "zod";
import { randomUUID } from "node:crypto";
import { knex } from "../database";

export async function eventoRoutes(app: FastifyInstance) {
  app.post("/", async (request, reply) => {
    const createEndereco = z.object({
      nome: z.string(),
      local: z.string(),
      horaInicio: z.string(),
      horaFinal: z.string(),
      status: z.string(),
    });

    const { nome, local, horaInicio, horaFinal, status } = createEndereco.parse(
      request.body
    );

    const evento = {
      id: randomUUID(),
      nome,
      local,
      horaInicio,
      horaFinal,
      status,
    };

    try {
      await knex("table_eventos").insert(evento);
    } catch (error) {
      console.log(error);
    }

    return reply.status(201).send(evento);
  });

  app.get("/", async function (request, reply) {
    const eventos = await knex("table_eventos").select();
    reply.send(eventos);
  });

  app.get("/listarEventos", async function (request, reply) {
    var time = new Date().getTime();
    console.log(time);
    const eventos = await knex("table_eventos").select();

    eventos.sort(
      (a, b) =>
        new Date(b.horaInicio).getTime() - new Date(a.horaInicio).getTime()
    );

    reply.send(eventos);
  });


  app.get("/listarEventosIniciados", async function (request, reply) {
    var currentTime = new Date(); // Obtém a hora atual
    var serverTimezoneOffset = currentTime.getTimezoneOffset() * 60000; // Obtém o offset do fuso horário do servidor em milissegundos
    var localTime = new Date(currentTime.getTime() - serverTimezoneOffset); // Converte a hora atual para o fuso horário local

    console.log(localTime)
    const eventos = await knex("table_eventos")
                        .where("horaInicio", "<=", currentTime)
                        .select();

    eventos.sort(
      (a, b) =>
        new Date(b.horaInicio).getTime() - new Date(a.horaInicio).getTime()
    );

    reply.send(eventos);
  });


  app.delete("/:id", async function (request, reply) {
    const idEvento = z.object({
      id: z.string(),
    });

    const { id } = idEvento.parse(request.params);

    const evento = await knex("table_eventos").delete().where("id", id);
    
    reply.send(evento);
  });
}
