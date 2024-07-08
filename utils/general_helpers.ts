const getFromLocalStorage = (key: string) => {
  if (!key || typeof window === 'undefined') {
    return '';
  }
  return localStorage.getItem(key);
};

const clearLocalStorage = () => {
  localStorage.clear();
};

export { clearLocalStorage, getFromLocalStorage };
