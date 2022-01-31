import * as actions from './actions.js';
import * as getters from './getters.js';
import * as mutations from './mutations.js';

const state = {
  //array of location objects, used for filling the auto-complete control
  //format retrived from: https://www.metaweather.com/api/#locationsearch
  searchOptions: [
    /*
    {
      title: 'San Francisco',
      location_type: 'City',
      woeid: 2487956,
      latt_long: '37.777119, -122.41964',
    },
    */
  ],

  //object of base data for selected of location, used for filling the weather base info for the current day and next few days
  //format retrived from: https://www.metaweather.com/api/#location
  selectedLocation: {
    /*
    consolidated_weather: [
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
    ],
    title: 'London',
    location_type: 'City',
    woeid: 44418,
    latt_long: '51.506321,-0.12714',
    timezone: 'Europe/London',
    */
  },

  //array of reduced location objects for different time slots in the last few days, used for creating the higchart chart (when expanding the rows)
  //format retrived from: https://www.metaweather.com/api/#locationday
  selectedLocationHourly: {
    /*
    {
      "id": 373220,
      "weather_state_name": "Light Rain",
      "weather_state_abbr": "lr",
      "wind_direction_compass": "N",
      "created": "2013-04-27T20:52:55.929470Z",
      "applicable_date": "2013-04-27",
      "min_temp": 3.07,
      "max_temp": 10.01,
      "the_temp": null,
      "wind_speed": 9.85,
      "wind_direction": 358.0,
      "air_pressure": null,
      "humidity": 74,
      "visibility": 9.997862483098704,
      "predictability": 75
    },
    */
  },

  //global message (string), used for detecting is server API is up/down
  apiError: null,
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
