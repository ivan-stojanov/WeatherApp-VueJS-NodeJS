<template>
  <div>
    <chart-control
      :yAxisLabel="'Temperature'"
      :seriesName="'Temp °C '"
      :seriesData="hourlyWeather"
      :key="hourlyWeather?.length"
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
    hourlyWeather() {
      return this.weatherPerHourForDay(this.weatherDate);
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
