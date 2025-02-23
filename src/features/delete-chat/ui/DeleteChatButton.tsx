import { useNavigate, useParams } from "react-router-dom";

import { deleteChatActionCreator } from "@/entity/chat";
import { paths } from "@/shared/constants";
import { useAppDispatch } from "@/shared/store";
import { Button } from "@/shared/ui";

export const DeleteChatButton = ({ chatId }: { chatId: string }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams() as { chatId: string };

  const deleteChat = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(deleteChatActionCreator(chatId));
    if (params.chatId === chatId) {
      navigate(paths.CHAT);
    }
  };

  return (
    <Button kind='destructive' size='icon' onClick={deleteChat}>
      <img style={{ width: 13 }} src='/trash.svg' alt='trash_icon' />
    </Button>
  );
};
