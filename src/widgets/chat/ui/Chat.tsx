import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import {
  chatSliceSelectors,
  getModelListActionCreator,
  patchUpdateModelActionCreator
} from "@/entity/chat";
import { messageSliceSelectors } from "@/entity/message";
import { useChat } from "@/features/send-message";
import { useAppDispatch, useAppSelector } from "@/shared/store";
import { Button, Grid, Input, Select, Spinner, Typography } from "@/shared/ui";

export const Chat = () => {
  const dispatch = useAppDispatch();
  const { chatId } = useParams() as { chatId: string };
  const { chatMessages, isLoading, isLoadingAssistent } = useAppSelector(
    messageSliceSelectors.getChatState
  );
  const { modelList, currentChat } = useAppSelector(chatSliceSelectors.getChatState);
  const { sendMessage } = useChat();
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const currentModelValue = modelList.find((model) => model.id === currentChat?.model_id);

  const updateModel = (value: string) => {
    const newModel = modelList.find((model) => model.label === value);
    dispatch(
      patchUpdateModelActionCreator({
        chatId: chatId,
        body: {
          modelId: newModel?.id
        }
      })
    );
  };

  useEffect(() => {
    if (modelList.length === 0) {
      dispatch(getModelListActionCreator());
    }
  }, []);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

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
        {isLoadingAssistent && <Typography kind='body-s-medium'>ИИ печатает...</Typography>}
        <div ref={messagesEndRef} />
      </MessagesContainer>
      <div style={{ marginBottom: 14 }}>
        <Select
          width='50%'
          value={currentModelValue?.label || "gpt-4o"}
          options={modelList.map((model) => model.label)}
          onChange={(value) => updateModel(value)}
        />
      </div>
      <Grid $columns='1fr 50px'>
        <Input
          type='text'
          placeholder='Введите сообщение...'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setInput("");
              sendMessage(input);
            }
          }}
        />
        <Button
          kind='outlined'
          onClick={() => {
            sendMessage(input);
            setInput("");
          }}
          disabled={isLoadingAssistent || !input.trim()}
        >
          ➤
        </Button>
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
  background: ${({ $sender }) => ($sender === "user" ? "var(--message-bg-color)" : "transparent")};
  color: #fff;
  align-self: ${({ $sender }) => ($sender === "user" ? "flex-end" : "flex-start")};
`;
