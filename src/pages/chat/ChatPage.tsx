import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { EventSource } from "eventsource";

import { getChatMessageListActionCreator, messageSliceActions } from "@/entity/message";
import { useAppDispatch } from "@/shared/store";
import { EServerSendEvents } from "@/shared/types";
import type { IMessage, IServerSendEventsResponse } from "@/shared/types";
import { Chat } from "@/widgets/chat";

const ChatPage = () => {
  const { chatId } = useParams() as { chatId: string };
  const dispatch = useAppDispatch();

  const stream = new EventSource(`${process.env.BASE_API_URL}/chat/${chatId}/stream`, {
    fetch: (input, init) =>
      fetch(input, {
        ...init,
        headers: {
          Authorization: `Bearer: ${process.env.AUTHORIZATION_TOKEN}`
        }
      })
  });

  stream.addEventListener("message", (event) => {
    const { data, name } = JSON.parse(event.data) as IServerSendEventsResponse<IMessage>;

    if (name === EServerSendEvents.MESSAGE_CREATE && data.message.role === "user") {
      dispatch(messageSliceActions.setNewMessage(data.message));
    }

    if (name === EServerSendEvents.JOB_CREATE) {
      dispatch(messageSliceActions.setIsLoadingAssistent(true));
    }

    if (name === EServerSendEvents.JOB_ERROR) {
      dispatch(messageSliceActions.setChatError(data.job.error));
      dispatch(messageSliceActions.setIsLoadingAssistent(false));
    }

    if (name === EServerSendEvents.JOB_DONE) {
      dispatch(messageSliceActions.setIsLoadingAssistent(false));
    }

    if (
      name === EServerSendEvents.MESSAGE_UPDATE &&
      "chat_id" in data.message &&
      data.message.content &&
      data.message.role === "assistant"
    ) {
      dispatch(messageSliceActions.setNewMessage(data.message));
    }
  });

  useEffect(() => {
    dispatch(getChatMessageListActionCreator(chatId));
  }, [chatId, dispatch]);

  useEffect(() => {
    dispatch(messageSliceActions.setChatError(undefined));
  }, []);

  return <Chat key={chatId} />;
};

export default ChatPage;
