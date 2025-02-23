import type { IChat, IModel } from "@/shared/types";

export interface IChatState {
  isLoading: boolean;
  error?: string;
  isChatListFetched: boolean;
  chatList: IChat[];
  currentChat?: IChat;
  modelList: IModel[];
}
