import { api } from "@/shared/api/instance";
import type { IChat } from "@/shared/types";

export interface IPostCreateChatParams {
  //   modelId: string;
  //   groupId: string;
  name: string;
  //   highlight: string;
}

export const postCreateChat = ({ config, data }: IMutationSettings<IPostCreateChatParams>) =>
  api.post<IChat>(`/chat`, data, config);
