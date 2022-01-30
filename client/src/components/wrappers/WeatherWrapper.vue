<template>
  <div>
    <weather-base-info :baseInfo="weatherForToday(todayDate)" />
    <weather-daily-info :dailyInfo="weatherForNextDays(todayDate, 5)" />
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
  computed: {
    ...mapGetters({
      weatherForToday: 'weather/DAILY_WEATHER_PER_DATE',
      weatherForNextDays: 'weather/WEATHER_DAY_RANGE',
    }),
  },
};
</script>
