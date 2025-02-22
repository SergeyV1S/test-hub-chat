import { createAsyncThunk } from "@reduxjs/toolkit";

import { getChatMessageList, postSendMessage } from "../api";
import type { IPostSendMessageSettings } from "../api";

export const getChatMessageListActionCreator = createAsyncThunk(
  "messageSlice/getChatMessageListActionCreator",
  async (chatUid: string) => (await getChatMessageList({ queryParams: { page: 1, chatUid } })).data
);

export const postSendMessageActionCreator = createAsyncThunk(
  "messageSlice/postSendMessageActionCreator",
  async (data: IPostSendMessageSettings) => (await postSendMessage({ data })).data
);
