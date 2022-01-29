const url = require("url");

/*
Location Search
Find a location
*/
exports.locationSearch = async (req, res) => {
  const urlParse = url.parse(req.url, true);
  if (!urlParse) {
    //to do
    return;
  }

  const queryObject = urlParse.query;
  console.log(queryObject);

  const locationService = req.app.services.locationService;

  let serviceResponse;
  if (queryObject.query) {
    console.log("/api/location/search/?query=(query)");
    console.log("query = ", queryObject.query);
    serviceResponse = await locationService.locationSearchByQuery(
      queryObject.query
    );
  } else if (queryObject.lattlong) {
    console.log("/api/location/search/?lattlong=(latt),(long)");
    console.log("lattlong = ", queryObject.lattlong);
    serviceResponse = await locationService.locationSearchByLatLong(
      queryObject.lattlong
    );
  }

  res.setHeader("Content-Type", "application/json");
  res.status(200).send(JSON.stringify(serviceResponse));
};

/*
Location
Location information, and a 5 day forecast
*/
exports.locationInformation = async (req, res) => {
  const woeid = req.params.woeid;
  if (!woeid) {
    //to do
    return;
  }

  console.log("/api/location/(woeid)/");
  console.log("woeid = ", woeid);

  const locationService = req.app.services.locationService;
  const serviceResponse = await locationService.locationInformation(woeid);

  res.setHeader("Content-Type", "application/json");
  res.status(200).send(JSON.stringify(serviceResponse));
};

/*
Location Day
Source information and forecast history for a particular day & location
*/
exports.locationDay = async (req, res) => {
  const woeid = req.params.woeid;
  const year = req.params.year;
  const month = req.params.month;
  const date = req.params.date;
  if (!woeid || !year || !month || !date) {
    //to do
    return;
  }

  console.log("/api/location/(woeid)/(year)/(month)/(date)/");
  console.log("woeid = ", woeid);
  console.log("year = ", year);
  console.log("month = ", month);
  console.log("date = ", date);

  const locationService = req.app.services.locationService;
  const serviceResponse = await locationService.locationDay(
    woeid,
    year,
    month,
    date
  );

  res.setHeader("Content-Type", "application/json");
  res.status(200).send(JSON.stringify(serviceResponse));
};
