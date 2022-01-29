import axios from 'axios';

export const SET_SEARCH_OPTIONS = ({ commit }, searchTerm) => {
  axios
    .get('http://localhost:3000/location/search/?query=' + searchTerm)
    .then((response) => {
      commit('SET_SEARCH_OPTIONS_MUTATE', response.data);
    });
};

export const SET_SELECTED_LOCATION = ({ commit, getters }, locationTitle) => {
  const location = getters.GET_LOCATION_BY_PROPERTY('title', locationTitle);
  axios
    .get('http://localhost:3000/location/' + location.woeid)
    .then((response) => {
      commit('SET_SELECTED_LOCATION_MUTATE', response.data);
    });
};

export const SET_SELECTED_LOCATION_HOURLY = (
  { commit },
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
    });
};
