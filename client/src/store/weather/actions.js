import axios from 'axios';

//array of location objects, used for filling the auto-complete control
//format retrived from: https://www.metaweather.com/api/#locationsearch
export const SET_SEARCH_OPTIONS = ({ commit }, searchTerm) => {
  if (searchTerm == []) {
    commit('SET_SEARCH_OPTIONS_MUTATE', []);
    return;
  }

  axios
    .get(
      `${process.env.VUE_APP_BACKEND_URL}/location/search/?query=${searchTerm}`,
    )
    .then((response) => {
      commit('SET_SEARCH_OPTIONS_MUTATE', response.data);
    })
    .catch((err) => {
      commit('SET_API_ERROR_MUTATE', {
        msg: err?.message || 'Something went wrong!',
      });
    });
};

//object of base data for selected of location, used for filling the weather base info for the current day and next few days
//format retrived from: https://www.metaweather.com/api/#location
export const SET_SELECTED_LOCATION = ({ commit, getters }, locationTitle) => {
  const location = getters.GET_LOCATION_BY_PROPERTY('title', locationTitle);

  axios
    .get(`${process.env.VUE_APP_BACKEND_URL}/location/${location.woeid}`)
    .then((response) => {
      commit('SET_SELECTED_LOCATION_MUTATE', response.data);
    })
    .catch((err) => {
      commit('SET_API_ERROR_MUTATE', {
        msg: err?.message || 'Something went wrong!',
      });
    });
};

//array of reduced location objects for different time slots in the last few days, used for creating the higchart chart (when expanding the rows)
//format retrived from: https://www.metaweather.com/api/#locationday
export const SET_SELECTED_LOCATION_HOURLY = (
  { commit },
  { locationWoeid, locationDate },
) => {
  const [year, month, date] = locationDate.split('-');

  axios
    .get(
      `${process.env.VUE_APP_BACKEND_URL}/location/${locationWoeid}/${parseInt(
        year,
      )}/${parseInt(month)}/${parseInt(date)}`,
    )
    .then((response) => {
      commit('SET_SELECTED_LOCATION_PER_DAY_MUTATE', {
        payload: response.data,
        locationDate,
      });
    })
    .catch((err) => {
      commit('SET_API_ERROR_MUTATE', {
        msg: err?.message || 'Something went wrong!',
      });
    });
};

//global message (string), used for detecting is server API is up/down
export const SET_API_ERROR = ({ commit }, errorMsg) => {
  commit('SET_API_ERROR_MUTATE', errorMsg);
};
