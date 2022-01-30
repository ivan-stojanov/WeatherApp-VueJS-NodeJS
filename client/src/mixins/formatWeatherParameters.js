import { formatOutput } from '../utils/common.js';

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
