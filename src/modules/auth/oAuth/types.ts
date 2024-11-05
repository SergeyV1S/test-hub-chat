export enum EoAuth {
  YANDEX = "Yandex",
  VK = "VK"
}

export interface IoAuthResponse {
  type: EoAuth;
  code: string;
}
