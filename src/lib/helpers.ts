export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + "...";
}
export function getCurrentTimeInItaly(): Date {
  // Create a date object with the current UTC time
  const now = new Date();

  // Convert the UTC time to Italy's time
  const offsetItaly = 2; // Italy is in Central European Summer Time (UTC+2), but you might need to adjust this based on Daylight Saving Time
  now.setHours(now.getUTCHours() + offsetItaly);

  return now;
}

export function formatTimeFor(date: Date, locale: string): string {

  console.log(locale);

  const options: Intl.DateTimeFormatOptions = {
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: locale === "en-US" ? true : false, // This will format the time in 12-hour format with AM/PM 
    timeZone: "Europe/Rome",
  };

  let formattedTime = new Intl.DateTimeFormat(locale, options).format(date);

  return formattedTime;
}

export function formatTimeForEnglish(date: Date): string {
  return formatTimeFor(date, "en-US");  
}

export function formatTimeForItaly(date: Date): string {
  return formatTimeFor(date, "it-IT");  
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
