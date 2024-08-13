FROM node:22-alpine3.19

COPY . .

RUN npm install

RUN npx prisma generate

EXPOSE ${BACKEND_PORT}

CMD [ "npm", "run", "start" ]