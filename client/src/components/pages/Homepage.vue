<template>
  <div>
    <search-wrapper />
    <weather-wrapper />
  </div>
</template>

<script>
import SearchWrapper from '../wrappers/SearchWrapper.vue';
import WeatherWrapper from '../wrappers/WeatherWrapper.vue';

export default {
  name: 'Homepage',
  components: {
    SearchWrapper,
    WeatherWrapper,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
