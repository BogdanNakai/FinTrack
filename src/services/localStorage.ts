export const getStorage = (key: string) => {
  const data = localStorage.getItem(key);

  if (!data) {
    return null;
  }

  return JSON.parse(data);
};

export const setStorage = (data, key: string) => {
  localStorage.setItem(key, JSON.stringify(data));
};

