export const getStorage = <DataStore>(key: string, defaultValue: DataStore): DataStore => {
  const data = localStorage.getItem(key);

  if (!data) {
    return defaultValue;
  }

  try {
    return JSON.parse(data) as DataStore;
  } catch (error) {
    console.error(
      `Error parsing data from localStorage for key "${key}":`,
      error,
    );
    return defaultValue;
  }
};

export const setStorage = <DataStore>(key: string, data: DataStore) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const removeStorage = (key: string) => {
  localStorage.removeItem(key);
};