import fastify from 'fastify'
import { env } from './env'
import cors from '@fastify/cors'

const app = fastify() 

app.register(cors, {
    origin: ["*"], //["https://dominio1.com", "https://dominio2.com"],
    methods: ["GET", "POST", "PUT", "DELETE"], // métodos HTTP permitidos
});


app.listen({
    port: env.PORT,
    host: '0.0.0.0'
}).then(() => {
    console.log('Http server runing')
})