# build stage
FROM node:12.16.3-alpine
WORKDIR /app/server
COPY package*.json ./
RUN npm i npm@latest -g && npm install
COPY . .
CMD ["npm", "run", "start-prod"]