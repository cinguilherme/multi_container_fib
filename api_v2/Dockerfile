FROM node:16-alpine

WORKDIR /app

COPY package.json /app

RUN yarn install

RUN tsc


FROM node:16-alpine
WORKDIR /app
COPY --from=0 /app/build /app

EXPOSE 3002

CMD [ "node", "build/server.js" ]