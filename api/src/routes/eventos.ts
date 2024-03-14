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
            horaFinal: z.string(),
            status: z.string(),
        });

        const { nome, local, horaInicio, horaFinal, status } = createEndereco.parse(request.body)

        const evento = {
            id: randomUUID(),
            nome,
            local, 
            horaInicio,
            horaFinal,
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

    app.get("/listarEventos", async function(request, reply) {

        var time = new Date().getTime();
        console.log(time)
        const eventos = await knex("table_eventos").select();

        console.log(eventos)
    
        eventos.sort((a, b) => new Date(b.horaInicio).getTime() - new Date(a.horaInicio).getTime());

        console.log(eventos)
        reply.send(eventos);
    })
}