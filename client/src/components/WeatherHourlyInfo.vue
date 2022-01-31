<!-- Component that shows the base info for the weather for a few time slots from the past, in a chart -->
<!-- 
It receives:
- (dailyInfo) data for the current selected location for a few time slots from the past
-->

<template>
  <div>
    <chart-control
      v-if="hourlyWeatherTheTemp && hourlyWeatherTheTemp.length"
      :yAxisLabel="'Temperature'"
      :serisDataFull="serisDataFull"
      :key="hourlyWeatherTheTemp?.length"
    ></chart-control>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ChartControl from './shared/ChartControl.vue';

import { removeZeroesFromDates } from '../utils/common.js';

export default {
  name: 'WeatherHourlyInfo',
  components: {
    ChartControl,
  },
  props: {
    hourlyInfo: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
  computed: {
    ...mapGetters({
      weatherPerHourForDay: 'weather/HOURLY_WEATHER_PER_DATE',
    }),
    weatherDate() {
      return removeZeroesFromDates(this.hourlyInfo.applicable_date);
    },
    hourlyWeatherTheTemp() {
      return this.weatherPerHourForDay(this.weatherDate, 'the_temp');
    },
    serisDataFull() {
      return [
        {
          seriesData: this.weatherPerHourForDay(this.weatherDate, 'the_temp'),
          seriesName: 'Temp °C ',
          seriesColor: 'green',
        },
        {
          seriesData: this.weatherPerHourForDay(this.weatherDate, 'max_temp'),
          seriesName: 'Max Temp °C ',
          seriesColor: 'red',
        },
        {
          seriesData: this.weatherPerHourForDay(this.weatherDate, 'min_temp'),
          seriesName: 'Min Temp °C ',
          seriesColor: 'blue',
        },
      ];
    },
  },
  mounted() {
    this.setSelectedLocationPerDay({
      locationWoeid: this.hourlyInfo.woeid,
      locationDate: this.weatherDate,
    });
  },
  methods: {
    ...mapActions({
      setSelectedLocationPerDay: 'weather/SET_SELECTED_LOCATION_HOURLY',
    }),
  },
};
</script>
