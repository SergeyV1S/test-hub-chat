import type { IChat, IModel } from "@/shared/types";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

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
      .addCase(getChatsActionCreator.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(
        getChatsActionCreator.fulfilled,
        (state, action: PayloadAction<IBaseResponse<IChat[]>>) => {
          state.chatList = action.payload.data;
          state.isLoading = false;
        }
      )
      .addCase(getChatsActionCreator.rejected, (state, action) => {
        state.error = action.error?.message;
        state.isLoading = false;
      })
      // Создать чат
      .addCase(postCreateChatActionCreator.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(postCreateChatActionCreator.fulfilled, (state, action: PayloadAction<IChat>) => {
        state.chatList = [action.payload, ...state.chatList];
        state.isLoading = false;
      })
      .addCase(postCreateChatActionCreator.rejected, (state, action) => {
        state.error = action.error?.message;
        state.isLoading = false;
      })
      // Удалить чат
      .addCase(deletChatActionCreator.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(deletChatActionCreator.fulfilled, (state, action: PayloadAction<IChat>) => {
        state.chatList = state.chatList.filter((chat) => chat.id === action.payload.id);
        state.isLoading = false;
      })
      .addCase(deletChatActionCreator.rejected, (state, action) => {
        state.error = action.error?.message;
        state.isLoading = false;
      })
      // Получить AI модели
      .addCase(getModelListActionCreator.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(getModelListActionCreator.fulfilled, (state, action: PayloadAction<IModel[]>) => {
        state.modelList = action.payload;
        state.isLoading = false;
      })
      .addCase(getModelListActionCreator.rejected, (state, action) => {
        state.error = action.error?.message;
        state.isLoading = false;
      })
      // Выбрать другую модель
      .addCase(patchUpdateModelActionCreator.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(patchUpdateModelActionCreator.fulfilled, (state, action: PayloadAction<IChat>) => {
        state.currentChat = action.payload;
        state.isLoading = false;
      })
      .addCase(patchUpdateModelActionCreator.rejected, (state, action) => {
        state.error = action.error?.message;
        state.isLoading = false;
      });
  },
  selectors: {
    getChatState: (state) => state
  }
});

export const chatSliceActions = chatSlice.actions;

export const chatSliceSelectors = chatSlice.selectors;
