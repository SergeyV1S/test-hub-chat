import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { getChatMessageListActionCreator } from "@/entity/message";
import { useAppDispatch } from "@/shared/store";
import { Chat } from "@/widgets/chat";

const ChatPage = () => {
  const { chatId } = useParams() as { chatId: string };
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getChatMessageListActionCreator(chatId));
  }, [chatId, dispatch]);

  return <Chat key={chatId} />;
};

export default ChatPage;
