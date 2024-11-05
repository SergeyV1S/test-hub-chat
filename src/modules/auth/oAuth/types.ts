export enum EoAuth {
  YANDEX = "YandexApi",
  VK = "VKApi"
}

export interface IoAuthResponse {
  type: EoAuth;
  code: string;
}
