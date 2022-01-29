<template>
  <div>{{ dailyBaseWeather }}<br /><br />{{ weatherPerDayVal }}</div>
</template>

<script>
/*
air_pressure:997
applicable_date:"2022-01-30"
created:"2022-01-28T22:15:07.773859Z"
humidity:90
id:4687106979921920
max_temp:1.945
min_temp:-4.925000000000001
predictability:90
the_temp:1.8399999999999999
visibility:6.295422234152549
weather_state_abbr:"sn"
weather_state_name:"Snow"
wind_direction:229.54820997488036
wind_direction_compass:"SW"
wind_speed:9.659838008905327
*/
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'WeatherDayInfo',
  props: {
    dailyBaseWeather: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
  computed: {
    ...mapGetters({
      weatherPerDay: 'weather/WEATHER_PER_DAY',
    }),
    applicable_date() {
      return this.dailyBaseWeather.applicable_date;
    },
    weatherPerDayVal() {
      return this.weatherPerDay(this.applicable_date);
    },
  },
  mounted() {
    console.log(
      'WeatherDayInfo , mounted , applicable_date = ',
      this.applicable_date,
    );

    this.setSelectedLocationPerDay({
      locationWoeid: this.dailyBaseWeather.woeid,
      locationDate: this.applicable_date,
    });
  },
  watch: {
    applicable_date: function (newValue, oldValue) {
      /*if (newValue.length !== oldValue.length || newValue.length == 0) {
        this.results = newValue;
        this.isLoading = false;
      }*/
      console.log('oldValue = ', oldValue);
      console.log('newValue = ', newValue);
      /*
            console.log(
      'WeatherDayInfo , mounted , title = ',
      this.dailyBaseWeather.title,
    );
    console.log(
      'WeatherDayInfo , mounted , applicable_date = ',
      this.dailyBaseWeather.applicable_date,
    );
    */
    },
  },
  methods: {
    ...mapActions({
      setSelectedLocationPerDay: 'weather/SET_SELECTED_LOCATION_PER_DAY',
    }),
  },
};
</script>
