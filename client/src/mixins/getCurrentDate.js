//import store from '@/store/index.js';
import { mapState } from 'vuex';

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

      let dateObj = new Date();

      let optionsYear = {
          timeZone: newTimezone,
          year: 'numeric',
        },
        formatterYear = new Intl.DateTimeFormat([], optionsYear);
      let currentYear = parseInt(formatterYear.format(dateObj));

      let optionsMonth = {
          timeZone: newTimezone,
          month: 'numeric',
        },
        formatterMonth = new Intl.DateTimeFormat([], optionsMonth);
      let currentMonth = parseInt(formatterMonth.format(dateObj));

      let optionsDay = {
          timeZone: newTimezone,
          day: 'numeric',
        },
        formatterDay = new Intl.DateTimeFormat([], optionsDay);
      let currentDay = parseInt(formatterDay.format(dateObj));

      this.todayDate = currentYear + '-' + currentMonth + '-' + currentDay;

      //console.log(store);
    },
  },
};
