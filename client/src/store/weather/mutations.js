export const SET_SEARCH_OPTIONS_MUTATE = (state, payload) => {
  state.searchOptions = payload;
};

export const SET_SELECTED_LOCATION_MUTATE = (state, payload) => {
  state.selectedLocation = payload;
};

export const SET_SELECTED_LOCATION_PER_DAY_MUTATE = (
  state,
  { payload, locationDate },
) => {
  state.selectedLocationHourly[locationDate] = payload;
};
