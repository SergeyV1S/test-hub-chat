import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

import { pendingHandler, rejectedHandler } from "@/shared/store";
import type { IChatMessage, IMessage } from "@/shared/types";

import { getChatMessageListActionCreator, postSendMessageActionCreator } from "./actions";
import type { IMessageState } from "./types";

export const initialState: IMessageState = {
  isLoading: false,
  isLoadingSend: false,
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
          state.chatMessages = action.payload.data.reverse();
          state.isLoading = false;
        }
      )
      .addCase(getChatMessageListActionCreator.rejected, rejectedHandler)
      // Отправить сообщение
      .addCase(postSendMessageActionCreator.pending, (state) => {
        state.isLoadingSend = true;
      })
      .addCase(postSendMessageActionCreator.fulfilled, (state, action: PayloadAction<IMessage>) => {
        state.chatMessages = [...state.chatMessages, action.payload];
        state.isLoadingSend = false;
      })
      .addCase(postSendMessageActionCreator.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoadingSend = false;
      });
  },
  selectors: {
    getChatState: (state) => state
  }
});

export const messageSliceActions = messageSlice.actions;

export const messageSliceSelectors = messageSlice.selectors;
