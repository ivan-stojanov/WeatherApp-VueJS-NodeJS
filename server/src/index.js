const express = require("express");
const cors = require("cors");

const locationRouter = require("./routes/locationRoutes");

const app = express();

const locationService = require("./services/locationService");
app.services = {
  locationService: locationService(),
};

const allowedOrigins = [
  "https://vue-weather-app-client.vercel.app/",
  "http://localhost:8080",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) {
        return callback(null, true);
      }
      if (allowedOrigins.indexOf(origin) === -1) {
        return callback(
          new Error(
            "The CORS policy for this site does not allow access from the specified origin."
          ),
          false
        );
      }
      return callback(null, true);
    },
  })
);
app.use("/api/location", locationRouter);

app.use("/api/assets", express.static(__dirname + "/public"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  console.log("Running at port ", PORT);
});
