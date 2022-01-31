import * as actions from './actions.js';
import * as getters from './getters.js';
import * as mutations from './mutations.js';

const state = {
  searchOptions: [
    /*{
      title: 'San Francisco',
      location_type: 'City',
      woeid: 2487956,
      latt_long: '37.777119, -122.41964',
    },
    {
      title: 'San Diego',
      location_type: 'City',
      woeid: 2487889,
      latt_long: '32.715691,-117.161720',
    },*/
  ],
  selectedLocation: {
    /*consolidated_weather: [
      {
        id: 5546156105924608,
        weather_state_name: 'Heavy Cloud',
        weather_state_abbr: 'hc',
        wind_direction_compass: 'WSW',
        created: '2022-01-28T18:59:01.853140Z',
        applicable_date: '2022-01-28',
        min_temp: 2.5300000000000002,
        max_temp: 9.505,
        the_temp: 8.934999999999999,
        wind_speed: 5.319509798091148,
        wind_direction: 250.16660269767468,
        air_pressure: 1035.0,
        humidity: 79,
        visibility: 7.33000526922771,
        predictability: 71,
      },
      {
        id: 6676450838052864,
        weather_state_name: 'Heavy Cloud',
        weather_state_abbr: 'hc',
        wind_direction_compass: 'W',
        created: '2022-01-28T18:59:01.846739Z',
        applicable_date: '2022-01-29',
        min_temp: 5.85,
        max_temp: 13.415,
        the_temp: 12.254999999999999,
        wind_speed: 10.557952879946447,
        wind_direction: 274.6677210568365,
        air_pressure: 1027.0,
        humidity: 77,
        visibility: 10.88455917442138,
        predictability: 71,
      },
    ],
    time: '2022-01-28T20:10:31.210053Z',
    sun_rise: '2022-01-28T07:44:46.175931Z',
    sun_set: '2022-01-28T16:42:42.802568Z',
    timezone_name: 'LMT',
    parent: {
      title: 'England',
      location_type: 'Region / State / Province',
      woeid: 24554868,
      latt_long: '52.883560,-1.974060',
    },
    sources: [
      {
        title: 'BBC',
        slug: 'bbc',
        url: 'http://www.bbc.co.uk/weather/',
        crawl_rate: 360,
      },
      {
        title: 'Forecast.io',
        slug: 'forecast-io',
        url: 'http://forecast.io/',
        crawl_rate: 480,
      },
    ],
    title: 'London',
    location_type: 'City',
    woeid: 44418,
    latt_long: '51.506321,-0.12714',
    timezone: 'Europe/London',*/
  },
  selectedLocationHourly: {},
  apiError: null,
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
