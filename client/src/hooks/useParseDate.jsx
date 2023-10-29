const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const useParseDate = (givenDate) => {
  const editedDate = `${givenDate}`.replace("+00:00", "-05:30");
  const date = new Date(editedDate);
  const localDate = date.toLocaleDateString();
  const actualDate = new Date(localDate);
  const dayName = days[actualDate.getDay()];
  const monthName = months[actualDate.getMonth()];
  const currentDate = actualDate.getDate();

  const localTime = date.toLocaleTimeString();
  const splittedTime = localTime.split(" ");
  const xy = splittedTime[0].split(":");
  const time = `${xy[0]}:${xy[1]}`;
  const timePeriod = splittedTime[1];
  return { dayName, monthName, currentDate, time, timePeriod };
};
