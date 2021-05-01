FROM node:15-alpine

WORKDIR /app

COPY . /app

RUN yarn build

FROM nginx:1.15.2-alpine
COPY --from=0 /app/build /var/www
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 3000
ENTRYPOINT ["nginx","-g","daemon off;"]
