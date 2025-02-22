import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { getChatMessageListActionCreator } from "@/entity/message";
import { useAppDispatch } from "@/shared/store";
import { Chat } from "@/widgets/chat";

const ChatPage = () => {
  const { chatUid } = useParams() as { chatUid: string };
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getChatMessageListActionCreator(chatUid));
  }, [chatUid, dispatch]);

  return <Chat key={chatUid} />;
};

export default ChatPage;
