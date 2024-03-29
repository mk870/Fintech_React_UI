import { useEffect, useState } from "react";

export const useLocaleStorage = (defaultValue, key) => {
  const [accessToken, setAccessToken] = useState(() => {
    const localeStorageValue = localStorage.getItem(key);
    return localeStorageValue !== null
      ? JSON.parse(localeStorageValue)
      : defaultValue;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(accessToken));
  }, [key, accessToken]);
  return [accessToken, setAccessToken];
};