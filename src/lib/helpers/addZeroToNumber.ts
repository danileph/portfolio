export const addZeroToNumber = (num: number): string => {
  if (num >= 10) return String(num);
  else return `0${num}`;
};
