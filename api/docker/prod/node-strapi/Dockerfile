FROM node:slim

COPY ./strapi ./app/strapi

WORKDIR /app

ARG NODE_ENV=production

ENV NODE_ENV=${NODE_ENV}

RUN npm install

EXPOSE 1337

CMD ["npm", "run","start"]