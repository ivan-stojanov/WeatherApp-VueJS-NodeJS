import { formatOutput } from '../utils/common.js';

/* 
Mixin that provides methods for formatting the values 
*/
export const formatWeatherParameters = {
  methods: {
    formatNumber(value, decimals) {
      return formatOutput(value, '', decimals);
    },
    formatTemperature(value) {
      return formatOutput(value, '°C');
    },
    formatWindSpeed(value) {
      return formatOutput(value, 'm/s');
    },
    formatPressure(value) {
      return formatOutput(value, 'mb');
    },
    formatHumidity(value) {
      return formatOutput(value, '%');
    },
  },
};
