import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

import { pendingHandler, rejectedHandler } from "@/shared/store";
import type { IChatMessage, IMessage } from "@/shared/types";

import { getChatMessageListActionCreator, postSendMessageActionCreator } from "./actions";
import type { IMessageState } from "./types";

export const initialState: IMessageState = {
  isLoading: false,
  isLoadingAssistent: false,
  chatMessages: []
};

export const messageSlice = createSlice({
  name: "messageSlice",
  initialState,
  reducers: {
    setNewMessage: (state, action: PayloadAction<IMessage>) => {
      state.chatMessages = [...state.chatMessages, action.payload];
    },
    setIsLoadingAssistent: (state, action: PayloadAction<boolean>) => {
      state.isLoadingAssistent = action.payload;
    },
    setChatError: (state, action: PayloadAction<string | undefined>) => {
      state.error = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      // Получить сообщения чата
      .addCase(getChatMessageListActionCreator.pending, pendingHandler)
      .addCase(
        getChatMessageListActionCreator.fulfilled,
        (state, action: PayloadAction<IBaseResponse<IChatMessage[]>>) => {
          state.chatMessages = action.payload.data
            .filter((message) => message.content !== null)
            .reverse();
          state.isLoading = false;
        }
      )
      .addCase(getChatMessageListActionCreator.rejected, rejectedHandler)
      // Отправить сообщение
      .addCase(postSendMessageActionCreator.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
  selectors: {
    getChatState: (state) => state
  }
});

export const messageSliceActions = messageSlice.actions;

export const messageSliceSelectors = messageSlice.selectors;
