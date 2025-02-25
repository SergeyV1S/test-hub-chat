import { useNavigate, useParams } from "react-router-dom";

import { postCreateChatActionCreator } from "@/entity/chat";
import { postSendMessageActionCreator } from "@/entity/message";
import { useAppDispatch } from "@/shared/store";

export const useChat = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { chatId } = useParams() as { chatId: string };

  const sendMessage = (message: string) => {
    dispatch(postSendMessageActionCreator({ chatId: chatId, message }));
  };

  const createChat = (message: string) => {
    dispatch(postCreateChatActionCreator({ name: message })).then((action) => {
      const payload = action.payload as { id: string };
      if (payload.id) {
        navigate(`/${payload.id}`);
      }
    });
  };

  return { sendMessage, createChat };
};
