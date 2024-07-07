const getFromLocalStorage = (key: string) => {
  if (!key || typeof window === 'undefined') {
    return '';
  }
  return localStorage.getItem(key);
};

const clearLocalStorage = () => {
  const tokenType = `${process.env.NEXT_PUBLIC_REACT_APP_ENVIRONMENT}__jwtToken`;
  localStorage.removeItem(tokenType);
  // remove all the storage as need
};

export { clearLocalStorage, getFromLocalStorage };
