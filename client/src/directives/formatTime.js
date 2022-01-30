import { getDateTimeParamsForTimezone } from '../utils/common.js';
import { enumDateFormats } from '../utils/constants.js';

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

    let output = date_string;
    if (binding.arg == enumDateFormats.MMM_dd_hh_mm_a)
      output = `${MMM} ${dd}, ${hh}:${mm}${a}`;
    else if (binding.arg == enumDateFormats.weekday_narrow)
      output = `${MMM} ${dd}, ${hh}:${mm}${a} (${ddd} ${n})`;

    el.innerHTML = output;
  },
};
