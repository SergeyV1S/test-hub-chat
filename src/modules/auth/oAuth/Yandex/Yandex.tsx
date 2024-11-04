import { useEffect } from "react";

import { Spinner } from "@shared/ui/spinner";

import { postYandexoAuth } from "./api/postYandexoAuth";

const YandexCallbackPage = () => {
  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");

    if (code) {
      postYandexoAuth({
        params: {
          code: `${code}`
        }
      });
    }
  }, []);

  return <Spinner />;
};

export default YandexCallbackPage;
