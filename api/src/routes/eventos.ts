import { FastifyInstance } from "fastify";
import { z } from "zod";
import { randomUUID } from "node:crypto";
import { knex } from "../database";

export async function eventoRoutes(app: FastifyInstance) {
    app.post("/", async (request, reply)=> {
        const createEndereco = z.object({
            nome: z.string(),
            local: z.string(),
            horaInicio: z.string(),
            horaFim: z.string(),
            status: z.string(),
        });

        const { nome, local, horaInicio, horaFim, status } = createEndereco.parse(request.body)

        const evento = {
            id: randomUUID(),
            nome,
            local, 
            horaInicio,
            horaFim,
            status
        }

        try {
            await knex('table_eventos').insert(evento);
        }catch(error){
            console.log(error)
        }

        return reply.status(201).send(evento);
    })

    app.get("/", async function(request, reply){
        const eventos = await knex("table_eventos").select();
        reply.send(eventos);
    })
}