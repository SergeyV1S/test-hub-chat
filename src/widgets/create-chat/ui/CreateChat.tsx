import { useState } from "react";
import styled from "styled-components";

import { useChat } from "@/features/send-message";
import { Button, Grid, Input } from "@/shared/ui";

export const CreateChat = () => {
  const [input, setInput] = useState("");
  const { createChat } = useChat();

  return (
    <ChatContainer>
      <Grid $columns='1fr 50px'>
        <Input
          type='text'
          placeholder='Введите сообщение...'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && createChat(input)}
        />
        <Button
          kind='outlined'
          onClick={() => {
            createChat(input);
            setInput("");
          }}
          disabled={!input.trim()}
        >
          ➤
        </Button>
      </Grid>
    </ChatContainer>
  );
};
const ChatContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: calc(100vh - 32px);
  margin: auto;
  background: var(--secondary-bg-color);
  border-radius: 18px;
  box-shadow: var(--sidebar-shadow);
  padding: 16px;
`;
