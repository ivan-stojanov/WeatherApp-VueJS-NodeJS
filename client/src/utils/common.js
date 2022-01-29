/* date_YYYY_MM_DD into date_YYYY_M_D */
export function removeZeroesFromDates(dateString) {
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
