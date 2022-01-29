import Vuex from 'vuex';

import weatherStore from './weather/index.js';

export default new Vuex.Store({
  strict: false,
  modules: {
    weather: weatherStore,
  },
});
