import type { IChatMessage } from "@/shared/types";

export interface IMessageState {
  isLoading: boolean;
  isLoadingSend: boolean;
  error?: string;
  chatMessages: IChatMessage[];
}
