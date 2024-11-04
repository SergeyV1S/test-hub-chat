import { api } from "@shared/api/instance";
import { AUTH_KEY, PATHS } from "@shared/constants";

interface IPostYandexoAuthParams {
  code: string;
}

export type TPostYandexoAuthConfig = RequestConfig<IPostYandexoAuthParams>;

export const postYandexoAuth = async ({ params, config }: TPostYandexoAuthConfig) =>
  api
    .post(`auth/oAuth`, params, config)
    .then(() => {
      localStorage.setItem(AUTH_KEY, "true");
      window.location.href = PATHS.PROFILE;
    })
    .catch((error) => {
      console.error(error);
    });
