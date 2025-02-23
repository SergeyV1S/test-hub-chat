import { createAsyncThunk } from "@reduxjs/toolkit";

import { IMessage } from "@/shared/types";

import { getChatMessageList, postSendMessage } from "../api";
import type { IPostSendMessageSettings } from "../api";

export const getChatMessageListActionCreator = createAsyncThunk(
  "messageSlice/getChatMessageListActionCreator",
  async (chatId: string) => (await getChatMessageList({ queryParams: { page: 1, chatId } })).data
);

export const postSendMessageActionCreator = createAsyncThunk<
  IMessage,
  IPostSendMessageSettings,
  { rejectValue: string }
>(
  "messageSlice/postSendMessageActionCreator",
  async (data: IPostSendMessageSettings) => (await postSendMessage({ data })).data
);
