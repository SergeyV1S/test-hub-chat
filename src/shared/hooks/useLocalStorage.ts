export const useLocalStorage = () => {
  const getValueFromLocalStorage = (key: string) => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? storedValue : null;
  };

  const setValueToLocalStorage = (key: string, value: string) => {
    localStorage.setItem(key, value);
  };

  const removeValueFromLocalStorage = (key: string) => {
    localStorage.removeItem(key);
  };

  return { getValueFromLocalStorage, setValueToLocalStorage, removeValueFromLocalStorage };
};
