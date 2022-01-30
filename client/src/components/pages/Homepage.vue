<template>
  <div class="q-pa-md">
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
