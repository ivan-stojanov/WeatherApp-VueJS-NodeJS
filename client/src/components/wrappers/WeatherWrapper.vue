<template>
  <div>
    <weather-base-info :baseInfo="weatherToday" />
    <weather-daily-range :weatherNextNdays="weatherNextNdays(5)" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import WeatherBaseInfo from '../WeatherBaseInfo.vue';
import WeatherDailyRange from '../WeatherDailyRange.vue';

export default {
  name: 'WeatherWrapper',
  components: {
    WeatherBaseInfo,
    WeatherDailyRange,
  },
  computed: {
    ...mapGetters({
      weatherToday: 'weather/WEATHER_TODAY',
      weatherNextNdays: 'weather/WEATHER_NEXT_N_DAYS',
    }),
  },
};
</script>
