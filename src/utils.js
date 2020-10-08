export const padZero = (num, digits = 2) => {
  return num.toString().padStart(digits, '0');
};
