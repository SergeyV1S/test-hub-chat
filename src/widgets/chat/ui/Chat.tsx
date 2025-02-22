import { useEffect } from "react";
import styled from "styled-components";

import { chatSliceSelectors, getModelListActionCreator } from "@/entity/chat";
import { messageSliceSelectors } from "@/entity/message";
import { useAppDispatch, useAppSelector } from "@/shared/store";
import { Button, Grid, Input, Select, Spinner } from "@/shared/ui";

export const Chat = () => {
  const dispatch = useAppDispatch();
  const { chatMessages, isLoading } = useAppSelector(messageSliceSelectors.getChatState);
  const { modelList, currentChat } = useAppSelector(chatSliceSelectors.getChatState);

  const currentModelValue = modelList.find((model) => model.id === currentChat?.model_id);

  useEffect(() => {
    dispatch(getModelListActionCreator());
  }, []);

  return (
    <ChatContainer>
      <MessagesContainer>
        {isLoading && <Spinner />}
        {!isLoading && chatMessages.length !== 0 && (
          <>
            {chatMessages.map((message) => (
              <MessageBubble key={message.id} $sender={message.role}>
                {message.content}
              </MessageBubble>
            ))}
          </>
        )}
        {/* {isLoading && <TypingIndicator>ИИ печатает...</TypingIndicator>} */}
      </MessagesContainer>
      <div style={{ marginBottom: 14 }}>
        <Select
          width='50%'
          value={currentModelValue?.label || "gpt-4o"}
          options={modelList.map((model) => model.label)}
          onChange={(value) => console.log(value)}
        />
      </div>
      <Grid $columns='1fr 50px'>
        <Input
          type='text'
          placeholder='Введите сообщение...'
          //   value={input}
          //   onChange={(e) => setInput(e.target.value)}
          //   onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        {/* <SendButton onClick={sendMessage} disabled={loading || !input.trim()}>
          ➤
        </SendButton> */}
        <Button kind='outlined'>➤</Button>
      </Grid>
    </ChatContainer>
  );
};

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: calc(100vh - 32px);
  margin: auto;
  background: var(--secondary-bg-color);
  border-radius: 18px;
  box-shadow: var(--sidebar-shadow);
  padding: 16px;
`;

const MessagesContainer = styled.div`
  flex: 1;
  position: relative;
  width: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 16px;
`;

const MessageBubble = styled.div<{ $sender: "user" | "assistant" }>`
  max-width: 75%;
  padding: 12px;
  border-radius: 18px;
  background: ${({ $sender }) =>
    $sender === "user" ? "var(--primary-color)" : "var(--secondary-color)"};
  color: ${({ $sender }) => ($sender === "user" ? "#fff" : "#000")};
  align-self: ${({ $sender }) => ($sender === "user" ? "flex-end" : "flex-start")};

  // const TypingIndicator = styled.div
`;
//   font-size: 14px;
//   color: #888;
//   text-align: left;
//   margin-left: 10px;
// `;
