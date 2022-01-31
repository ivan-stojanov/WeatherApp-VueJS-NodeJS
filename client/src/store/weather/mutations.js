//array of location objects, used for filling the auto-complete control
//format retrived from: https://www.metaweather.com/api/#locationsearch
export const SET_SEARCH_OPTIONS_MUTATE = (state, payload) => {
  state.searchOptions = payload;
};

//object of base data for selected of location, used for filling the weather base info for the current day and next few days
//format retrived from: https://www.metaweather.com/api/#location
export const SET_SELECTED_LOCATION_MUTATE = (state, payload) => {
  state.selectedLocation = payload;
};

//array of reduced location objects for different time slots in the last few days, used for creating the higchart chart (when expanding the rows)
//format retrived from: https://www.metaweather.com/api/#locationday
export const SET_SELECTED_LOCATION_PER_DAY_MUTATE = (
  state,
  { payload, locationDate },
) => {
  state.selectedLocationHourly[locationDate] = payload;
};

//global message (string), used for detecting is server API is up/down
export const SET_API_ERROR_MUTATE = (state, payload) => {
  state.apiError = payload?.msg ?? null;
};
