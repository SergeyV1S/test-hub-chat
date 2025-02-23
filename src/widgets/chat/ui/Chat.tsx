import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import {
  chatSliceSelectors,
  getModelListActionCreator,
  patchUpdateModelActionCreator
} from "@/entity/chat";
import { AssistantMessage, UserMessage, messageSliceSelectors } from "@/entity/message";
import { SendMessageInput, useChat } from "@/features/send-message";
import { useAppDispatch, useAppSelector } from "@/shared/store";
import { Flex, Select, Spinner, Typography } from "@/shared/ui";

export const Chat = () => {
  const dispatch = useAppDispatch();
  const { chatId } = useParams() as { chatId: string };
  const { sendMessage } = useChat();
  const { chatMessages, isLoading, isLoadingAssistent } = useAppSelector(
    messageSliceSelectors.getChatState
  );
  const { modelList, currentChat } = useAppSelector(chatSliceSelectors.getChatState);

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
            {chatMessages.map((message) =>
              message.role === "user" ? (
                <UserMessage
                  content={message.content}
                  created_at={message.created_at}
                  key={message.id}
                />
              ) : (
                <AssistantMessage
                  key={message.id}
                  content={message.content}
                  tokens={message.tokens}
                  model={currentModelValue?.label || "gpt-4o"}
                  created_at={message.created_at}
                />
              )
            )}
          </>
        )}
        {!isLoading && chatMessages.length === 0 && (
          <EmptyChat $alignItems='center' $justifyContent='center'>
            <Typography kind='body-l-regular'>В этом чате еще нет сообщений</Typography>
          </EmptyChat>
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
      <SendMessageInput submitHandler={sendMessage} />
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

const EmptyChat = styled(Flex)`
  width: 100%;
  height: 100vh;
`;
