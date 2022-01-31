//import store from '@/store/index.js';
import { mapState } from 'vuex';

import { getDateTimeParamsForTimezone } from '../utils/common.js';

/* 
Mixin that provides:
- todayDate in the format YYYY-M-D (based on the seleted location)
- current_timezone (based on the seleted location)
*/
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
