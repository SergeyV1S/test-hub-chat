import styled from "styled-components";

import { SendMessageInput, useChat } from "@/features/send-message";

const CreateChatPage = () => {
  const { createChat } = useChat();

  return (
    <CreateChatContainer>
      <SendMessageInput submitHandler={createChat} />
    </CreateChatContainer>
  );
};

const CreateChatContainer = styled.div`
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

export default CreateChatPage;
