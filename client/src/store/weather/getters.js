//export const SEARCH_OPTIONS = (state) => state.searchOptions;

export const SEARCH_OPTIONS = (state) => {
  if (!state.searchOptions) return [];

  return state.searchOptions.map((item) => {
    return item.title;
  });
};

export const GET_LOCATION_BY_PROPERTY = (state) => (property, value) => {
  if (!state.searchOptions) return {};
  const locations = state.searchOptions.filter(
    (item) => item[property] == value,
  );

  if (!locations) return {};
  return locations[0];
};

export const WEATHER_TODAY = (state) => {
  if (!state.selectedLocation) return {};

  let weatherToday = {
    time: state.selectedLocation.time,
    sun_rise: state.selectedLocation.sun_rise,
    sun_set: state.selectedLocation.sun_set,
    title: state.selectedLocation.title,
    parent_title: state.selectedLocation.parent?.title,
  };
  if (
    state.selectedLocation.consolidated_weather &&
    state.selectedLocation.consolidated_weather.length > 0
  ) {
    weatherToday = Object.assign({}, weatherToday, {
      ...state.selectedLocation.consolidated_weather[0],
    });
  }

  return weatherToday;
};

export const WEATHER_NEXT_N_DAYS = (state) => (numberOfDays) => {
  if (!state.selectedLocation) return {};

  let weatherNextNdays = [];
  if (
    state.selectedLocation.consolidated_weather &&
    state.selectedLocation.consolidated_weather.length > 0
  ) {
    weatherNextNdays = state.selectedLocation.consolidated_weather.slice(
      1,
      1 + numberOfDays,
    );
  }

  return weatherNextNdays.map((obj) => ({
    ...obj,
    title: state.selectedLocation.title,
    woeid: state.selectedLocation.woeid,
  }));
};

export const WEATHER_PER_DAY = (state) => (date) => {
  if (!state.selectedLocationPerDay) return {};

  return state.selectedLocationPerDay[date];
};
