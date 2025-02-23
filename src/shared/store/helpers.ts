import type { PayloadAction, SerializedError } from "@reduxjs/toolkit";

export const rejectedHandler = (
  state: { error?: string; isLoading: boolean },
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

export const pendingHandler = (state: { error?: string; isLoading: boolean }) => {
  state.isLoading = true;
  state.error = undefined;
};
