# build stage
FROM node:12.16.3-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm i npm@latest -g && npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:1.18.0-alpine as production-stage
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]