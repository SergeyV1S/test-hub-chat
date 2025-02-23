import type { IChatMessage } from "@/shared/types";

export interface IMessageState {
  isLoading: boolean;
  isLoadingAssistent: boolean;
  error?: string;
  chatMessages: IChatMessage[];
}
