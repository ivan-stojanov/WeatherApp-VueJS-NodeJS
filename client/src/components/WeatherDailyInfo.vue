<template>
  <div>
    <div v-for="item in dailyInfo" :key="item.id">
      {{ dailyInfo }}<br /><br />
      <weather-hourly-info :hourlyInfo="item" />
    </div>
  </div>
</template>

<script>
import WeatherHourlyInfo from './WeatherHourlyInfo.vue';

export default {
  name: 'WeatherDailyInfo',
  components: {
    WeatherHourlyInfo,
  },
  props: {
    dailyInfo: {
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
