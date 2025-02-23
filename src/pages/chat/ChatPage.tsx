import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { EventSource } from "eventsource";

import { getChatMessageListActionCreator, messageSliceActions } from "@/entity/message";
import { useAppDispatch } from "@/shared/store";
import { IMessage } from "@/shared/types";
import { Chat } from "@/widgets/chat";

enum EServerSendEvents {
  MESSAGE_CREATE = "MESSAGE_CREATE",
  MESSAGE_UPDATE = "MESSAGE_UPDATE",
  JOB_CREATE = "JOB_CREATE",
  JOB_START = "JOB_START",
  JOB_UPDATE = "JOB_UPDATE",
  JOB_DONE = "JOB_DONE",
  UPDATE = "UPDATE",
  TRANSACTION_CREATE = "TRANSACTION_CREATE",
  SUBSCRIPTION_UPDATE = "SUBSCRIPTION_UPDATE"
}

interface IServerSendEventsResponse<Message> {
  name: EServerSendEvents;
  data: {
    message: Message;
  };
}

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

  return <Chat key={chatId} />;
};

export default ChatPage;
