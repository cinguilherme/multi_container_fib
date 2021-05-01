FROM node:15-alpine as builer

WORKDIR /app

COPY package.json /app
RUN npm install

COPY . /app
RUN npm run build

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html