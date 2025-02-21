import { api } from "@/shared/api/instance";
import type { IChat } from "@/shared/types";

export const deleteChat = ({ config, data }: IMutationSettings<{ chatUid: string }>) =>
  api.delete<IChat>(`/chat/${data.chatUid}`, config);
