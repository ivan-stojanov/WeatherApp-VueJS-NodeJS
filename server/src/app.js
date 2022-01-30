const express = require("express");
const cors = require("cors");

const locationRouter = require("./routes/locationRoutes");

const app = express();

const locationService = require("./services/locationService");
app.services = {
  locationService: locationService(),
};

const allowedOrigins = [];

//to do:
if (true) {
  allowedOrigins.push("http://localhost:8080");
}

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
app.use("/location", locationRouter);

app.use("/assets", express.static(__dirname + "/public"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  console.log("Running at port ", PORT);
});
