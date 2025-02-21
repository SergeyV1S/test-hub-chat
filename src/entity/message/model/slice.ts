import { pendingHandler, rejectedHandler } from "@/shared/store";
import type { IChatMessage, IMessage } from "@/shared/types";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

import { getChatMessageListActionCreator, postSendMessageActionCreator } from "./actions";
import type { IMessageState } from "./types";

export const initialState: IMessageState = {
  isLoading: false,
  chatMessages: []
};

export const messageSlice = createSlice({
  name: "messageSlice",
  initialState,
  reducers: {
    setNewMessage: (state, action: PayloadAction<IMessage>) => {
      state.chatMessages = [...state.chatMessages, action.payload];
    }
  },
  extraReducers: (builder) => {
    builder
      // Получить сообщения чата
      .addCase(getChatMessageListActionCreator.pending, pendingHandler)
      .addCase(
        getChatMessageListActionCreator.fulfilled,
        (state, action: PayloadAction<IBaseResponse<IChatMessage[]>>) => {
          state.chatMessages = action.payload.data;
          state.isLoading = false;
        }
      )
      .addCase(getChatMessageListActionCreator.rejected, rejectedHandler)
      // Отправить сообщение
      .addCase(postSendMessageActionCreator.pending, pendingHandler)
      .addCase(postSendMessageActionCreator.fulfilled, (state, action: PayloadAction<IMessage>) => {
        state.chatMessages = [...state.chatMessages, action.payload];
        state.isLoading = false;
      })
      .addCase(postSendMessageActionCreator.rejected, rejectedHandler);
  },
  selectors: {
    getChatState: (state) => state
  }
});

export const messageSliceActions = messageSlice.actions;

export const messageSliceSelectors = messageSlice.selectors;
