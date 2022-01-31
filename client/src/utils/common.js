/* date_YYYY_MM_DD into date_YYYY_M_D */
export function removeZeroesFromDates(dateString) {
  if (!dateString) return dateString;
  return dateString.replaceAll('-0', '-');
}

/* date object into date_YYYY_M_D */
export function formatDate(dateObj) {
  return (
    dateObj.getFullYear() +
    '-' +
    (dateObj.getMonth() + 1) +
    '-' +
    dateObj.getDate()
  );
}

/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#parameters */
function getDateTimeParam(paramName, paramType, dateObj, timeZone) {
  let optConfig = {};
  optConfig['timeZone'] = timeZone;
  optConfig[paramName] = paramType;
  const formatterYearNum = new Intl.DateTimeFormat([], optConfig);

  let result = formatterYearNum.format(dateObj);
  if (paramType == '2-digit' && result.length == 1) result = `0${result}`;

  return result;
}

/* */
export function getDateTimeParamsForTimezone(date, timezone) {
  //hours is prvided in hh aa format, so need to extract the values manually
  let shortHourTxt = getDateTimeParam('hour', 'numeric', date, timezone);
  let longHourTxt = getDateTimeParam('hour', '2-digit', date, timezone);

  let shortHourParamArr = shortHourTxt.split(' ');
  let hourSuffix = '',
    shortHourNum = '';
  if (shortHourParamArr && shortHourParamArr.length == 2) {
    shortHourNum = shortHourParamArr[0];
    hourSuffix = shortHourParamArr[1];
  }

  let longHourParamArr = longHourTxt.split(' ');
  let longHourNum = '';
  if (longHourParamArr && longHourParamArr.length == 2) {
    longHourNum = longHourParamArr[0];
  }

  return {
    yearNum: getDateTimeParam('year', 'numeric', date, timezone),
    shortMonthNum: getDateTimeParam('month', 'numeric', date, timezone),
    longMonthNum: getDateTimeParam('month', '2-digit', date, timezone),
    shortMonthTxt: getDateTimeParam('month', 'short', date, timezone),
    longMonthTxt: getDateTimeParam('month', 'long', date, timezone),
    shortDayNum: getDateTimeParam('day', 'numeric', date, timezone),
    longDayNum: getDateTimeParam('day', '2-digit', date, timezone),
    shortWeekDayNum: getDateTimeParam('weekday', 'short', date, timezone),
    longWeekDayNum: getDateTimeParam('weekday', 'long', date, timezone),
    shortHourNum: shortHourNum,
    longHourNum: longHourNum,
    hourSuffix: hourSuffix.toLowerCase(),
    shortDayPeriodTxt: getDateTimeParam('dayPeriod', 'short', date, timezone),
    longDayPeriodTxt: getDateTimeParam('dayPeriod', 'long', date, timezone),
    narrowDayPeriodTxt: getDateTimeParam('dayPeriod', 'narrow', date, timezone),
    shortMinuteNum: getDateTimeParam('minute', 'numeric', date, timezone),
    longMinuteNum: getDateTimeParam('minute', '2-digit', date, timezone),
    shortSecondNum: getDateTimeParam('second', 'numeric', date, timezone),
    longSecondNum: getDateTimeParam('second', '2-digit', date, timezone),
    timestampMS: date.getTime(),
  };

  /*
  hourSuffix: "am"
longDayNum: "30"
longDayPeriodTxt: "in the morning"
longHourNum: "07"
longMinuteNum: "35"
longMonthNum: "01"
longMonthTxt: "January"
longSecondNum: "53"
longWeekDayNum: "Sunday"
narrowDayPeriodTxt: "in the morning"
shortDayNum: "30"
shortDayPeriodTxt: "in the morning"
shortHourNum: "7"
shortMinuteNum: "35"
shortMonthNum: "1"
shortMonthTxt: "Jan"
shortSecondNum: "53"
shortWeekDayNum: "Sun"
yearNum: "2022"
  */
}

export function formatOutput(value, suffix = '', decimals = 4) {
  return `${parseFloat(value.toFixed(decimals))}${suffix}`;
}
