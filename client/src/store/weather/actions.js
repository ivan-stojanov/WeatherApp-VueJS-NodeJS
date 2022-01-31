import axios from 'axios';

export const SET_SEARCH_OPTIONS = ({ commit /*, dispatch*/ }, searchTerm) => {
  if (searchTerm == []) {
    commit('SET_SEARCH_OPTIONS_MUTATE', []);
    return;
  }
  axios
    .get('http://localhost:3000/location/search/?query=' + searchTerm)
    .then((response) => {
      commit('SET_SEARCH_OPTIONS_MUTATE', response.data);
    })
    .catch((err) => {
      commit('SET_API_ERROR_MUTATE', {
        msg: err?.message || 'Something went wrong!',
      });
    });
};

export const SET_SELECTED_LOCATION = (
  { commit, getters /*, dispatch*/ },
  locationTitle,
) => {
  const location = getters.GET_LOCATION_BY_PROPERTY('title', locationTitle);

  axios
    .get('http://localhost:3000/location/' + location.woeid)
    .then((response) => {
      commit('SET_SELECTED_LOCATION_MUTATE', response.data);
    })
    .catch((err) => {
      commit('SET_API_ERROR_MUTATE', {
        msg: err?.message || 'Something went wrong!',
      });
    });
};

export const SET_SELECTED_LOCATION_HOURLY = (
  { commit /*, dispatch*/ },
  { locationWoeid, locationDate },
) => {
  const [year, month, date] = locationDate.split('-');

  axios
    .get(
      'http://localhost:3000/location/' +
        locationWoeid +
        '/' +
        parseInt(year) +
        '/' +
        parseInt(month) +
        '/' +
        parseInt(date),
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

export const SET_API_ERROR = ({ commit }, errorMsg) => {
  commit('SET_API_ERROR_MUTATE', errorMsg);
};
