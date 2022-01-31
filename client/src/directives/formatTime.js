import { getDateTimeParamsForTimezone } from '../utils/common.js';
import { enumDateFormats } from '../utils/constants.js';

/* 
Custom directive for formatting the date-time

Used parameters:
 - argument: enum value from client\src\utils\constants.js, used for detecting the time format
 - value: object { date_string, timezone }, where
 - - date_string, long string retrived from the API
 - - timezone, timezone for the given date_string, required for detecting the dates
*/
export default {
  updated: function (el, binding) {
    const { date_string, timezone } = binding.value;

    const {
      shortMonthTxt: MMM,
      longDayNum: dd,
      longHourNum: hh,
      longMinuteNum: mm,
      hourSuffix: a,
      longWeekDayNum: ddd,
      narrowDayPeriodTxt: n,
    } = getDateTimeParamsForTimezone(new Date(date_string), timezone);

    //in the section below, we can add miltiple formats
    let output = date_string;
    if (binding.arg == enumDateFormats.MMM_dd_hh_mm_a)
      output = `${MMM} ${dd}, ${hh}:${mm}${a}`;
    else if (binding.arg == enumDateFormats.weekday_narrow)
      output = `${MMM} ${dd}, ${hh}:${mm}${a} (${ddd} ${n})`;

    el.innerHTML = output;
  },
};
