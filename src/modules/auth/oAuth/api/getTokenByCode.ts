import { api } from "@shared/api/instance";
import { AUTH_KEY, PATHS } from "@shared/constants";

export const getTokenByCode = async (code: string) =>
  api
    .post<any>(
      `${import.meta.env.BASE_YANDEX_API_URL}/token`,
      new URLSearchParams({
        grant_type: "authorization_code",
        code: code,
        client_id: import.meta.env.YANDEX_CLIENT_ID,
        client_secret: import.meta.env.YANDEX_CLIENT_SECRET
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    )
    .then((res) => {
      console.log("Токен доступа:", res.data.access_token);
      localStorage.setItem(AUTH_KEY, "true");
      localStorage.setItem("access-token", res.data.access_token);
      window.location.href = PATHS.PROFILE;
    })
    .catch((error) => {
      console.error(error);
    });
