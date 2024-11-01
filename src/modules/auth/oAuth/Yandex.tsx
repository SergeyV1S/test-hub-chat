import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AUTH_KEY, PATHS } from "@shared/constants";

export const YandexCallback = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    if (code) {
      exchangeCodeForToken(code);
    }
  }, []);

  const exchangeCodeForToken = async (code: string) => {
    await fetch("https://oauth.yandex.ru/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code: code,
        client_id: import.meta.env.YANDEX_CLIENT_ID,
        client_secret: import.meta.env.YANDEX_CLIENT_SECRET
      })
    })
      .then((res) => res.json())
      .then((jsonRes) => {
        if (jsonRes.access_token) {
          console.log("Токен доступа:", jsonRes.access_token);
          localStorage.setItem(AUTH_KEY, "true");
          localStorage.setItem("access-token", jsonRes.access_token);
          navigate(PATHS.PROFILE);
        } else {
          console.error("Ошибка авторизации:", jsonRes);
        }
      });
  };

  return <div>Авторизация через Яндекс...</div>;
};
