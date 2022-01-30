<template>
  <card-control v-if="baseInfo && baseInfo.id">
    <template v-slot:date>
      <span
        v-format-time:[enumDateFormats.weekday_narrow]="{
          date_string: baseInfo.today_time,
          timezone: current_timezone,
        }"
      ></span>
    </template>
    <template v-slot:card_img>
      <q-img
        class="col-3"
        :src="
          'https://www.metaweather.com//static/img/weather/' +
          baseInfo.weather_state_abbr +
          '.svg'
        "
        fit="contain"
      >
        <div class="absolute-bottom-right text-subtitle2">
          {{ baseInfo.weather_state_name }}
        </div>
      </q-img>
    </template>
    <template v-slot:card_content>
      <div>
        <div>
          <span class="ft-20 bld">
            {{ baseInfo.title }}, {{ baseInfo.parent_title }}
          </span>
        </div>
        <span class="ft-18 itl">
          <i>{{ baseInfo.weather_state_name }}</i>
        </span>
        <div>
          <span v-weather-label>Current Temp:</span>
          {{ formatTemperature(baseInfo.the_temp) }} <br />
          <span v-weather-label>Temp Range:</span>
          {{ formatTemperature(baseInfo.min_temp) }} /
          {{ formatTemperature(baseInfo.max_temp) }}
        </div>

        <div>
          <span v-weather-label>Sun Rise:</span>&nbsp;
          <span
            v-format-time:[enumDateFormats.MMM_dd_hh_mm_a]="{
              date_string: baseInfo.today_sun_rise,
              timezone: current_timezone,
            }"
          ></span>
        </div>
        <div>
          <span v-weather-label>Sun Set:</span>&nbsp;
          <span
            v-format-time:[enumDateFormats.MMM_dd_hh_mm_a]="{
              date_string: baseInfo.today_sun_set,
              timezone: current_timezone,
            }"
          ></span>
        </div>

        <div>
          <span v-weather-label>Wind:</span>
          {{ formatWindSpeed(baseInfo.wind_speed) }}
          {{ baseInfo.wind_direction_compass }} ({{
            formatNumber(baseInfo.wind_direction)
          }})
          <q-btn flat icon="img:http://localhost:3000/assets/compass-icn.png" />
        </div>
        <div>
          <span v-weather-label>Air Pressure:</span>
          {{ formatPressure(baseInfo.air_pressure) }}
        </div>
        <div>
          <span v-weather-label>Humidity:</span>
          {{ formatHumidity(baseInfo.humidity) }}
        </div>
        <div>
          <span v-weather-label>Visibility:</span>
          {{ formatNumber(baseInfo.visibility) }}
        </div>
        <div>
          <span v-weather-label>Predictability:</span>
          {{ baseInfo.predictability }}
        </div>
      </div>
    </template>
  </card-control>
</template>

<script>
import CardControl from './shared/CardControl.vue';

import { formatWeatherParameters } from '../mixins/formatWeatherParameters.js';
import { getCurrentDate } from '../mixins/getCurrentDate.js';
import { enumDateFormats } from '../utils/constants.js';
import formatTime from '../directives/formatTime.js';
import weatherLabel from '../directives/weatherLabel.js';

export default {
  name: 'WeatherBaseInfo',
  mixins: [formatWeatherParameters, getCurrentDate],
  directives: {
    formatTime: formatTime,
    weatherLabel: weatherLabel,
  },
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
  data() {
    return {
      enumDateFormats,
    };
  },
};
</script>

<style scoped>
.ft-20 {
  font-size: 20px;
}
.ft-18 {
  font-size: 18px;
}
.bld {
  font-weight: bold;
}
.itl {
  font-style: italic;
}
</style>
