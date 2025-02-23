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
  async (data: IPostSendMessageSettings, { rejectWithValue }) => {
    try {
      const response = await postSendMessage({ data });

      const {
        id,
        status,
        tokens,
        action_type,
        user_id,
        additional_content,
        tg_bot_message_id,
        disabled,
        request_id,
        transaction_id,
        model_id,
        created_at,
        type
      } = response.data;

      return {
        id,
        role: "user",
        status,
        tokens,
        action_type,
        user_id,
        chat_id: data.chatId,
        additional_content,
        tg_bot_message_id,
        disabled,
        content: data.message,
        request_id,
        transaction_id,
        model_id,
        created_at,
        type
      };
    } catch (error) {
      console.log(error);
      return rejectWithValue("Error occurred while sending the message");
    }
  }
);
