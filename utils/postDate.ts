const AUTHOR_TIME_ZONE = "America/Los_Angeles";
const DATE_ONLY_PATTERN = /^(\d{4})-(\d{2})-(\d{2})$/;

const postDateFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: AUTHOR_TIME_ZONE,
  month: "long",
  day: "numeric",
  year: "numeric",
});

export const formatPostDate = (date: string): string => {
  const match = DATE_ONLY_PATTERN.exec(date);

  if (!match) {
    throw new RangeError(`Expected a post date in YYYY-MM-DD format, received "${date}"`);
  }

  const [, year, month, day] = match;
  // Noon UTC always falls on the same calendar date in Pacific Time.
  const pacificCalendarDate = new Date(Date.UTC(Number(year), Number(month) - 1, Number(day), 12));

  return postDateFormatter.format(pacificCalendarDate);
};
