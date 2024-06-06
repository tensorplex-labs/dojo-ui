import moment from 'moment';

const roundTwoDP = (numStr: string): string => {
  const num = parseFloat(numStr);
  const numToTwoDecimalPlaces = num.toFixed(2);
  return numToTwoDecimalPlaces;
};

const roundDP = (numStr: string, dp: number): string => {
  const num = parseFloat(numStr);
  const numToTwoDecimalPlaces = num.toFixed(dp);
  return numToTwoDecimalPlaces;
};

/*
 *
 *
 * Format a number into a nice $ formatted version
 * For example, 1000000 should be 100,000. 5302111 should be 5,302,111
 * @param value The number to be formatted
 *
 */
const formatDollar = (value: string): string => {
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * The concept is to split the number into LHS and RHS.
 * e.g. 19324.83 -> [19] [324]
 * e.g. 218827112 -> [218] [827112]
 * Done using a while loop, it starts slicing 3 number by 3 number from RHS
 * Everytime 3 number is sliced, the suffix moves from k->m or m->b
 * @param value The number to be abbreviated
 * @returns
 */
const abbreviateNumber = (value?: number) => {
  if (!value) return;
  let newValue: string | number = value;
  if (value < 1000) {
    return newValue;
  }
  const valueRounded = Math.floor(value) + ''; //Removing decimals and convert to string
  const suffixes = ['', 'k', 'm', 'b', 't'];
  let suffixFinalIndex = 0;
  let remainingLHS = valueRounded + '';
  while (remainingLHS.length > 3) {
    remainingLHS = remainingLHS.slice(0, remainingLHS.length - 3);
    suffixFinalIndex++; // Everytime we slice 3 numbers, means suffix go to next one; k->m->b->t
  }
  const remainingRHS = valueRounded.slice(remainingLHS.length, valueRounded.length);
  newValue = `${remainingLHS}.${remainingRHS[0]}${
    remainingRHS.length > 0 && remainingRHS[1]
  }${suffixes[suffixFinalIndex]}`;
  return newValue;
};

export const getAbbreviatedDate = (date: Date) => {
  let retValue = 0;
  const d1 = moment(new Date());
  retValue = d1.diff(date, 'seconds');
  if (retValue < 60) return 'Not long';

  let suffix = `second${retValue > 1 ? 's' : ''}`;
  if (retValue > 60) {
    retValue = Math.abs(d1.diff(date, 'minutes'));
    suffix = `minute${retValue > 1 ? 's' : ''}`;
  }
  if (retValue > 60) {
    retValue = Math.abs(d1.diff(date, 'hours'));
    suffix = `hour${retValue > 1 ? 's' : ''}`;
  }
  if (retValue > 23) {
    retValue = Math.abs(d1.diff(date, 'days'));
    suffix = `day${retValue > 1 ? 's' : ''}`;
  }
  if (retValue > 31) {
    retValue = Math.abs(d1.diff(date, 'months'));
    suffix = `month${retValue > 1 ? 's' : ''}`;
  }
  return `${retValue} ${suffix}`;
};

export const getFirstFourLastFour = (str: string) => {
  if (str === '' || str === null) {
    return '-';
  }
  return `${str.slice(0, 4)}...${str.slice(-4)}`;
};

export const getFirstSixLastSix = (str: string) => {
  if (str === '' || str === null) {
    return '-';
  }
  return `${str.slice(0, 6)}...${str.slice(-6)}`;
};

export { abbreviateNumber, formatDollar, roundDP, roundTwoDP };
