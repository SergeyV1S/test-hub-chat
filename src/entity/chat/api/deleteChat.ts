import { api } from "@/shared/api/instance";
import type { IChat } from "@/shared/types";

export const deleteChat = ({ config, data }: IMutationSettings<{ chatId: string }>) =>
  api.delete<IChat>(`/chat/${data.chatId}`, config);
