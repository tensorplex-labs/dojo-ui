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

export const getFirstAndLastCharacters = (str: string, num: number) => {
  if (str === '' || str === null) {
    return '-';
  }
  return `${str.slice(0, num)}...${str.slice(-num)}`;
};
