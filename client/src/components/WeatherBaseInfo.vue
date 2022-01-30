<template>
  <card-control v-if="baseInfo && baseInfo.id">
    <template v-slot:date>
      {{ baseInfo.today_time }}
    </template>
    <template v-slot:card_img>
      <q-img
        class="col-3"
        :src="
          'https://www.metaweather.com//static/img/weather/' +
          baseInfo.weather_state_abbr +
          '.svg'
        "
      />
    </template>
    <template v-slot:card_content>
      <div>
        <div>
          {{ baseInfo.title }}, {{ baseInfo.parent_title }} (timezone:
          {{ baseInfo.timezone }})
        </div>
        {{ baseInfo.weather_state_name }}
        <div>
          Current Temp: {{ formatTemperature(baseInfo.the_temp) }} <br />
          Temp Range: {{ formatTemperature(baseInfo.min_temp) }} /
          {{ formatTemperature(baseInfo.max_temp) }}
        </div>

        <div>Sun Rise: {{ baseInfo.today_sun_rise }}</div>
        <div>Sun Set: {{ baseInfo.today_sun_set }}</div>

        <div>
          Wind: {{ formatWindSpeed(baseInfo.wind_speed) }}
          {{ baseInfo.wind_direction_compass }} ({{
            formatNumber(baseInfo.wind_direction)
          }})
          <q-btn flat icon="img:http://localhost:3000/assets/compass-icn.png" />
        </div>

        <div>Pressure: {{ baseInfo.air_pressure }}mb</div>
        <div>Humidity: {{ baseInfo.humidity }}%</div>
        <div>Visibility: {{ formatNumber(baseInfo.visibility) }}</div>
        <div>Predictability: {{ baseInfo.predictability }}</div>
      </div>
    </template>
  </card-control>
</template>

<script>
import CardControl from './shared/CardControl.vue';

import { formatWeatherParameters } from '../mixins/formatWeatherParameters.js';

export default {
  name: 'WeatherBaseInfo',
  mixins: [formatWeatherParameters],
  components: {
    CardControl,
  },
  props: {
    baseInfo: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
};
</script>
