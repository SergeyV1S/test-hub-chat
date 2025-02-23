import { deleteChatActionCreator } from "@/entity/chat";
import { useAppDispatch } from "@/shared/store";
import { Button } from "@/shared/ui";

export const DeleteChatButton = ({ chatId }: { chatId: string }) => {
  const dispatch = useAppDispatch();

  const deleteChat = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(deleteChatActionCreator(chatId));
  };

  return (
    <Button kind='destructive' size='icon' onClick={deleteChat}>
      <img style={{ width: 13 }} src='/trash.svg' alt='trash_icon' />
    </Button>
  );
};
