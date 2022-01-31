# Weather App

## Frontend project

Details can be found at: [https://github.com/ivan-stojanov/vue-weather-app/tree/main/client#readme](https://github.com/ivan-stojanov/vue-weather-app/tree/main/client#readme)

## Backend project

Details can be found at: [https://github.com/ivan-stojanov/vue-weather-app/tree/main/server#readme](https://github.com/ivan-stojanov/vue-weather-app/tree/main/server#readme)

## Run the app with Docker

Build a Docker image from the frontend project:

```
root> cd client
root\client> docker build -t weather-app-client
```

Build a Docker image from the backend project:

```
root> cd server
root\server> docker build -t weather-app-server
```

Run the project with docker:

```
root> docker-compose --file docker-compose.yml up
```
