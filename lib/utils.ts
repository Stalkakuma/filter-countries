export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export const range = (start: number, end: number) =>
  [...Array(end).keys()].map((el) => el + start);
