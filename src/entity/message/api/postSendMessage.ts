import { api } from "@/shared/api/instance";
import type { IMessage } from "@/shared/types";

export interface IPostSendMessageSettings {
  chatId: string;
  message: string;
}

export const postSendMessage = ({ config, data }: IMutationSettings<IPostSendMessageSettings>) =>
  api.post<IMessage>(`/message/send`, data, config);
