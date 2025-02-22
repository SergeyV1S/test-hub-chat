import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

import { pendingHandler, rejectedHandler } from "@/shared/store";
import type { IChat, IModel } from "@/shared/types";

import {
  deletChatActionCreator,
  getChatsActionCreator,
  getModelListActionCreator,
  patchUpdateModelActionCreator,
  postCreateChatActionCreator
} from "./actions";
import type { IChatState } from "./types";

export const initialState: IChatState = {
  isLoading: false,
  chatList: [],
  modelList: []
};

export const chatSlice = createSlice({
  name: "chatSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Получить список чатов
      .addCase(getChatsActionCreator.pending, pendingHandler)
      .addCase(
        getChatsActionCreator.fulfilled,
        (state, action: PayloadAction<IBaseResponse<IChat[]>>) => {
          state.chatList = action.payload.data;
          state.isLoading = false;
        }
      )
      .addCase(getChatsActionCreator.rejected, rejectedHandler)
      // Создать чат
      .addCase(postCreateChatActionCreator.pending, pendingHandler)
      .addCase(postCreateChatActionCreator.fulfilled, (state, action: PayloadAction<IChat>) => {
        state.chatList = [action.payload, ...state.chatList];
        state.isLoading = false;
      })
      .addCase(postCreateChatActionCreator.rejected, rejectedHandler)
      // Удалить чат
      .addCase(deletChatActionCreator.pending, pendingHandler)
      .addCase(deletChatActionCreator.fulfilled, (state, action: PayloadAction<IChat>) => {
        state.chatList = state.chatList.filter((chat) => chat.id === action.payload.id);
        state.isLoading = false;
      })
      .addCase(deletChatActionCreator.rejected, rejectedHandler)
      // Получить AI модели
      .addCase(getModelListActionCreator.pending, pendingHandler)
      .addCase(getModelListActionCreator.fulfilled, (state, action: PayloadAction<IModel[]>) => {
        state.modelList = action.payload;
        state.isLoading = false;
      })
      .addCase(getModelListActionCreator.rejected, rejectedHandler)
      // Выбрать другую модель
      .addCase(patchUpdateModelActionCreator.pending, pendingHandler)
      .addCase(patchUpdateModelActionCreator.fulfilled, (state, action: PayloadAction<IChat>) => {
        state.currentChat = action.payload;
        state.isLoading = false;
      })
      .addCase(patchUpdateModelActionCreator.rejected, rejectedHandler);
  },
  selectors: {
    getChatState: (state) => state
  }
});

export const chatSliceActions = chatSlice.actions;

export const chatSliceSelectors = chatSlice.selectors;
