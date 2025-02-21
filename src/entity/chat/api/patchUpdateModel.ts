import { api } from "@/shared/api/instance";
import type { IChat } from "@/shared/types";

export interface IPatchUpdateModelParams {
  chatId: string;
  body: Partial<{
    name: string;
    highlight: string;
    modelId: string;
    modelFunctionId: string;
    initial: boolean;
    groupId: string;
  }>;
}

export const patchUpdateModel = ({ config, data }: IMutationSettings<IPatchUpdateModelParams>) =>
  api.patch<IChat>(`/chat/${data.chatId}`, data.body, config);
