import type { IChat, IModel } from "@/shared/types";

export interface IChatState {
  isLoading: boolean;
  error?: string;
  chatList: IChat[];
  currentChat?: IChat;
  modelList: IModel[];
}
