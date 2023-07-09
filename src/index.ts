const monthAbbreviations = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

type Timezones = { [key: string]: string };

const timezones: Timezones = {
  "+720": "Y",
  "+660": "X",
  "+600": "W",
  "+540": "V",
  "+480": "U",
  "+420": "T",
  "+360": "S",
  "+300": "R",
  "+240": "Q",
  "+180": "P",
  "+120": "O",
  "+60": "N",
  "0": "Z",
  "-60": "A",
  "-120": "B",
  "-180": "C",
  "-240": "D",
  "-300": "E",
  "-360": "F",
  "-420": "G",
  "-480": "H",
  "-540": "I",
  "-600": "K",
  "-660": "L",
  "-720": "M",
};

/*
 * Convert a date to a DTG string
 * @param {Date} date - The date to convert
 * @param {boolean} withTimezone - Whether to include the timezone in the DTG string
 * @returns {string} The DTG string
 */
export function toDTG(date: Date, withTimezone = false): string {
  const monthAbbreviation = monthAbbreviations[date.getMonth()];
  const timezone = timezones[date.getTimezoneOffset().toString()];
  const day = date.getDate().toString().padStart(2, "0");
  const hour = date.getHours().toString().padStart(2, "0");
  const minute = date.getMinutes().toString().padStart(2, "0");
  const year = date.getFullYear().toString().substr(-2);
  if (!withTimezone) return `${day}${hour}${minute}${monthAbbreviation}${year}`;
  return `${day}${hour}${minute}${timezone}${monthAbbreviation}${year}`;
}
