function getLocalStorage(key) {
    return localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key))
      : null;
  }
  function setLocalStorage(key, value) {
    return localStorage.setItem(key, JSON.stringify(value));
  }
  export { getLocalStorage, setLocalStorage };
  