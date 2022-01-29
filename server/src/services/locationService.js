const axios = require("axios");

const locationService = () => {
  const self = {};

  self.locationSearchByQuery = async (query) => {
    try {
      const responseData = await axios
        .get("https://www.metaweather.com/api/location/search/?query=" + query)
        .then((response) => {
          return response.data;
        });

      return responseData;
    } catch (error) {
      //to do
      return null;
    }
  };

  self.locationSearchByLatLong = async (lattlong) => {
    try {
      const responseData = await axios
        .get(
          "https://www.metaweather.com/api/location/search/?lattlong=" +
            lattlong
        )
        .then((response) => {
          return response.data;
        });

      return responseData;
    } catch (error) {
      //to do
      return null;
    }
  };

  self.locationInformation = async (woeid) => {
    try {
      const responseData = await axios
        .get("https://www.metaweather.com/api/location/" + woeid)
        .then((response) => {
          return response.data;
        });

      return responseData;
    } catch (error) {
      //to do
      return null;
    }
  };

  self.locationDay = async (woeid, year, month, date) => {
    try {
      const responseData = await axios
        .get(
          "https://www.metaweather.com/api/location/" +
            woeid +
            "/" +
            year +
            "/" +
            month +
            "/" +
            date
        )
        .then((response) => {
          return response.data;
        });

      return responseData;
    } catch (error) {
      //to do
      return null;
    }
  };

  return self;
};

module.exports = locationService;
