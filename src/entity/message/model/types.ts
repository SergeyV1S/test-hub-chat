import type { IChatMessage } from "@/shared/types";

export interface IMessageState {
  isLoading: boolean;
  error?: string;
  chatMessages: IChatMessage[];
}
