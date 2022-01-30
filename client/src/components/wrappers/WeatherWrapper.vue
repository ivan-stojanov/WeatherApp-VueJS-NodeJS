<template>
  <div>
    <weather-base-info :baseInfo="weatherForToday(todayDate)" />
    <weather-daily-info
      :dailyInfo="weatherForNextDays(todayDate, numberOfDays)"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import WeatherBaseInfo from '../WeatherBaseInfo.vue';
import WeatherDailyInfo from '../WeatherDailyInfo.vue';
import { getCurrentDate } from '../../mixins/getCurrentDate.js';

export default {
  name: 'WeatherWrapper',
  mixins: [getCurrentDate],
  components: {
    WeatherBaseInfo,
    WeatherDailyInfo,
  },
  props: {
    numberOfDays: {
      type: Number,
      required: false,
      default: () => 5,
    },
  },
  provide() {
    return {
      numberOfDays: this.numberOfDays,
    };
  },
  computed: {
    ...mapGetters({
      weatherForToday: 'weather/DAILY_WEATHER_PER_DATE',
      weatherForNextDays: 'weather/WEATHER_DAY_RANGE',
    }),
  },
};
</script>
