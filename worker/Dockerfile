FROM node:15-alpine3.12

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

CMD ["node", "index.js"]