const getFromLocalStorage = (key: string) => {
  if (!key || typeof window === 'undefined') {
    return '';
  }
  return localStorage.getItem(key);
};

const clearLocalStorage = () => {
  localStorage.removeItem('jwtToken');
  // remove all the storage as need
};

export { clearLocalStorage, getFromLocalStorage };
