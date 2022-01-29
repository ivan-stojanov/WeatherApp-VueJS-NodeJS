import { removeZeroesFromDates, formatDate } from '../../utils/common.js';

/* 
options that appers in the search control
*/
export const SEARCH_OPTIONS = (state) => {
  if (!state.searchOptions) return [];

  return state.searchOptions.map((item) => {
    return item.title;
  });
};

/*
get full location data (first found element), based on any property-value pair
*/
export const GET_LOCATION_BY_PROPERTY = (state) => (property, value) => {
  if (!state.searchOptions) return {};

  const locations = state.searchOptions.filter(
    (item) => item[property] == value,
  );

  if (!locations) return {};
  return locations[0];
};

/*
key-value representation, where key is in the format YYYY-MM-DD and the value are the items from consolidated_weather array
*/
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

/*
get base weather info, based on a date
*/
export const DAILY_WEATHER_PER_DATE = (state, getters) => (date) => {
  return getters.WEATHER_DAILY_FORECAST[date] ?? null;
};

/*
get hourly weather info, based on a date
*/
export const HOURLY_WEATHER_PER_DATE = (state) => (date) => {
  if (!state.selectedLocationHourly) return {};

  return state.selectedLocationHourly[date];
};

/*
starting from tommorow and then the next numberOfDays days
*/
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
