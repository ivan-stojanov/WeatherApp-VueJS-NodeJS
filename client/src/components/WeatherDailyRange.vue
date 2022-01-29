<template>
  <div>
    <div v-for="item in weatherNextNdays" :key="item.id">
      <weather-day-info :dailyBaseWeather="item" />
      <br /><br />
    </div>
  </div>
</template>

<script>
import WeatherDayInfo from './WeatherDayInfo.vue';

export default {
  name: 'WeatherDailyRange',
  components: {
    WeatherDayInfo,
  },
  props: {
    weatherNextNdays: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  data() {
    return {};
  },
};
</script>
