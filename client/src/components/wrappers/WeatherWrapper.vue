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

import { formatDate } from '../../utils/common.js';

export default {
  name: 'WeatherWrapper',
  components: {
    WeatherBaseInfo,
    WeatherDailyInfo,
  },
  data() {
    return {
      todayDate: formatDate(new Date()),
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
