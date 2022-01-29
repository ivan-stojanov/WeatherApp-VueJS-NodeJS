<template>
  <div v-if="baseInfo.id">
    <div>title: {{ baseInfo.title }}</div>
    <div>parent_title: {{ baseInfo.parent_title }}</div>
    <div>time: {{ baseInfo.time }}</div>
    <div>sun_rise: {{ baseInfo.sun_rise }}</div>
    <div>sun_set: {{ baseInfo.sun_set }}</div>
    <div>weather_state_name: {{ baseInfo.weather_state_name }}</div>
    <div>weather_state_abbr: {{ baseInfo.weather_state_abbr }}</div>
    <div>wind_direction_compass: {{ baseInfo.wind_direction_compass }}</div>
    <div>created: {{ baseInfo.created }}</div>
    <div>applicable_date: {{ baseInfo.applicable_date }}</div>
    <div>min_temp: {{ baseInfo.min_temp }}</div>
    <div>max_temp: {{ baseInfo.max_temp }}</div>
    <div>the_temp: {{ baseInfo.the_temp }}</div>
    <div>wind_speed: {{ baseInfo.wind_speed }}</div>
    <div>wind_direction: {{ baseInfo.wind_direction }}</div>
    <div>air_pressure: {{ baseInfo.air_pressure }}</div>
    <div>humidity: {{ baseInfo.humidity }}</div>
    <div>visibility: {{ baseInfo.visibility }}</div>
    <div>predictability: {{ baseInfo.predictability }}</div>
    <img
      style="width: 200px"
      :src="
        'https://www.metaweather.com//static/img/weather/' +
        baseInfo.weather_state_abbr +
        '.svg'
      "
    />
  </div>
</template>

<script>
export default {
  name: 'WeatherBaseInfo',
  props: {
    baseInfo: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
  data() {
    return {};
  },
};
</script>
