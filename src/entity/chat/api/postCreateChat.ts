import { api } from "@/shared/api/instance";
import type { IChat } from "@/shared/types";

export interface IPostCreateChatParams {
  name: string;
}

export const postCreateChat = ({ config, data }: IMutationSettings<IPostCreateChatParams>) =>
  api.post<IChat>(`/chat`, data, config);
