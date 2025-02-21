import { IChatState } from "@/entity/chat";
import { IMessageState } from "@/entity/message";
import type { PayloadAction, SerializedError } from "@reduxjs/toolkit";

export const rejectedHandler = (
  state: IChatState | IMessageState,
  action: PayloadAction<
    unknown,
    string,
    {
      arg: any;
      requestId: string;
      requestStatus: "rejected";
      aborted: boolean;
      condition: boolean;
    } & (
      | {
          rejectedWithValue: true;
        }
      | ({
          rejectedWithValue: false;
        } & {})
    ),
    SerializedError
  >
) => {
  state.error = action.error?.message;
  state.isLoading = false;
};

export const pendingHandler = (state: IChatState | IMessageState) => {
  state.isLoading = true;
  state.error = undefined;
};
