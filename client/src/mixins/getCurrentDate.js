//import store from '@/store/index.js';
import { mapState } from 'vuex';

import { getDateTimeParamsForTimezone } from '../utils/common.js';

export const getCurrentDate = {
  data() {
    return {
      todayDate: null,
    };
  },
  computed: {
    ...mapState({
      current_timezone: (state) => state?.weather?.selectedLocation?.timezone,
    }),
  },
  watch: {
    current_timezone(newTimezone) {
      if (!newTimezone) return;

      const dateObj = new Date();
      const {
        yearNum: currentYear,
        shortMonthNum: currentMonth,
        shortDayNum: currentDay,
      } = getDateTimeParamsForTimezone(dateObj, newTimezone);

      this.todayDate = currentYear + '-' + currentMonth + '-' + currentDay;

      //console.log(store);
    },
  },
};
