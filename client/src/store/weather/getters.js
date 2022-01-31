import {
  removeZeroesFromDates,
  formatDate,
  getDateTimeParamsForTimezone,
} from '../../utils/common.js';

//array of location names, used for filling the auto-complete control
export const SEARCH_OPTIONS = (state) => {
  if (!state.searchOptions) return [];

  return state.searchOptions.map((item) => {
    return item.title;
  });
};

//get the location object (from the search array), based on key-value pair
//example usage, get the location object by location title, in case when item is seelcted from the autocomplete list
export const GET_LOCATION_BY_PROPERTY = (state) => (property, value) => {
  if (!state.searchOptions) return {};

  const locations = state.searchOptions.filter(
    (item) => item[property] == value,
  );

  if (!locations) return {};
  return locations[0];
};

//transformation of the response for the forecast (from consolidated_weather at https://www.metaweather.com/api/#location)
//into object with key-value pairs, where:
//  key is in the format YYYY-MM-DD
//  value are the items from consolidated_weather array + additiinaly there are other fileds from the root included
//example usage: for performace, it't better to have the forecast available by kay-value pairs from an object. This acts as a state (just in format that we need)
export const WEATHER_DAILY_FORECAST = (state) => {
  if (
    Array.isArray(state.selectedLocation?.consolidated_weather) &&
    state.selectedLocation.consolidated_weather.length > 0
  ) {
    return state.selectedLocation.consolidated_weather
      .map((obj) => ({
        ...obj,
        title: state.selectedLocation.title,
        woeid: state.selectedLocation.woeid,
        timezone: state.selectedLocation.timezone,
        today_time: state.selectedLocation.time,
        today_sun_rise: state.selectedLocation.sun_rise,
        today_sun_set: state.selectedLocation.sun_set,
        parent_title: state.selectedLocation.parent?.title,
      }))
      .reduce(
        (prevVal, currVal) => ({
          ...prevVal,
          [removeZeroesFromDates(currVal.applicable_date)]: currVal,
        }),
        {},
      );
  }
  return {};
};

//a getter for interacting with the transformed entity WEATHER_DAILY_FORECAST and getting weather data for a single day (by date)
//example usage: getting the base weather data for today
export const DAILY_WEATHER_PER_DATE = (state, getters) => (date) => {
  return getters.WEATHER_DAILY_FORECAST[date] ?? null;
};

//a getter for interacting with the transformed entity WEATHER_DAILY_FORECAST and getting weather data for a few days (by date and number of days)
//example usage: getting the base weather data for today
export const WEATHER_DAY_RANGE = (state, getters) => (date, numberOfDays) => {
  const forecastArr = [];
  const todayDate = date;

  let resultDay, tempDay;
  for (let days = 1; days <= numberOfDays; days++) {
    resultDay = new Date(todayDate);
    resultDay.setDate(resultDay.getDate() + days);

    tempDay = getters.WEATHER_DAILY_FORECAST[formatDate(resultDay)] ?? null;
    if (tempDay) forecastArr.push(tempDay);
  }

  return forecastArr;
};

//transformation of the response for the forecast, for different time slots in the last few days
//example usage: getting the data, used for the higchart chart, when expanding a row
export const HOURLY_WEATHER_PER_DATE =
  (state) =>
  (date, property = 'the_temp') => {
    if (!state.selectedLocationHourly) return {};

    return state.selectedLocationHourly[date]
      ?.map(function (obj) {
        let {
          timestampMS: timestampMSCurrent,
          yearNum: yearCurrent,
          shortMonthNum: monthCurrent,
          shortDayNum: dayCurrent,
        } = getDateTimeParamsForTimezone(
          new Date(obj.created),
          state?.selectedLocation?.timezone,
        );

        let currentDate = yearCurrent + '-' + monthCurrent + '-' + dayCurrent;

        return {
          ...obj,
          is_match: currentDate == date ? true : false,
          x: timestampMSCurrent,
          y: obj[property],
          marker: {
            symbol:
              property == 'the_temp'
                ? `url(https://www.metaweather.com/static/img/weather/png/64/${obj.weather_state_abbr}.png)`
                : '',
          },
        };
      })
      .sort(function (a, b) {
        return a.x - b.x;
      });
  };
