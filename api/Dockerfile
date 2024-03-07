FROM node:latest

WORKDIR /usr/app

COPY package*.json ./

RUN npm install --production

RUN npm install -g ts-node

COPY . .

RUN npm install --only=production && npm cache clean --force && npm install -g typescript

RUN npm install knex zod fastify

RUN npx tsc

EXPOSE 3333

CMD ["npm", "start"]