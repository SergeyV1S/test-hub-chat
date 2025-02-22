import { createAsyncThunk } from "@reduxjs/toolkit";

import { deleteChat, getChatList, getModelList, patchUpdateModel, postCreateChat } from "../api";
import type { IPatchUpdateModelParams, IPostCreateChatParams } from "../api";

export const getChatsActionCreator = createAsyncThunk(
  "chatSlice/getChatsActionCreator",
  async () => (await getChatList({ queryParams: { page: 1 } })).data
);

export const postCreateChatActionCreator = createAsyncThunk(
  "chatSlice/postCreateChatActionCreator",
  async (data: IPostCreateChatParams) => (await postCreateChat({ data })).data
);

export const deletChatActionCreator = createAsyncThunk(
  "chatSlice/deletChatActionCreator",
  async (data: { chatUid: string }) => (await deleteChat({ data })).data
);

export const getModelListActionCreator = createAsyncThunk(
  "modelSlice/getModelListActionCreator",
  async () => (await getModelList({ queryParams: { page: 0 } })).data
);

export const patchUpdateModelActionCreator = createAsyncThunk(
  "chatSlice/patchUpdateModelActionCreator",
  async (data: IPatchUpdateModelParams) => (await patchUpdateModel({ data })).data
);
