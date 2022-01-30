<template>
  <expanding-rows-control
    title="5 Day Forecast"
    :columns="columns"
    :rows="dailyInfo"
    rowIdentifer="id"
    v-if="dailyInfo && dailyInfo.length"
  >
    <template v-slot:row_content="slotProps">
      <weather-hourly-info :hourlyInfo="slotProps.rowData" />
    </template>
  </expanding-rows-control>
</template>

<script>
import WeatherHourlyInfo from './WeatherHourlyInfo.vue';
import ExpandingRowsControl from './shared/ExpandingRowsControl.vue';

import { formatWeatherParameters } from '../mixins/formatWeatherParameters.js';

export default {
  name: 'WeatherDailyInfo',
  mixins: [formatWeatherParameters],
  components: {
    WeatherHourlyInfo,
    ExpandingRowsControl,
  },
  props: {
    dailyInfo: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  data() {
    return {
      columns: [
        {
          name: 'applicable_date',
          label: 'Date',
          field: 'applicable_date',
          sortable: true, //to do
        },
        {
          name: 'current_temp',
          label: 'Current Temp',
          field: 'the_temp',
          format: (val, row) => `${this.formatTemperature(row?.the_temp)}`,
        },
        {
          name: 'temp_range',
          label: 'Temp Range',
          field: (row) => row.min_temp + ' ' + row.max_temp,
          format: (val, row) =>
            `${this.formatTemperature(row?.min_temp)}` +
            ' / ' +
            `${this.formatTemperature(row?.max_temp)}`,
        },
        {
          name: 'humidity',
          label: 'Humidity',
          field: 'humidity',
          format: (val, row) => `${this.formatHumidity(row?.humidity)}`,
        },
        {
          name: 'weather_state_name',
          label: 'Weather',
          field: 'weather_state_name',
        },
        //https://quasar.dev/vue-components/table#Example--Body-cell-%5Bname%5D-slot
        //https://forum.quasar-framework.org/topic/4336/q-table-merge-2-fields-into-a-single-column/5
        //https://quasar.dev/vue-components/table#expanding-rows
      ],
    };
  },
};
</script>
