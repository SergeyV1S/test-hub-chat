import { useEffect } from "react";

import { getTokenByCode } from "./api/getTokenByCode";

export const YandexCallback = () => {
  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    if (code) {
      getTokenByCode(code);
    }
  }, []);

  return <div>Авторизация через Яндекс...</div>;
};
