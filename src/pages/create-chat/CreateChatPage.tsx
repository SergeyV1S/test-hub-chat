import styled from "styled-components";

import { SendMessageInput, useChat } from "@/features/send-message";

const CreateChatPage = () => {
  const { createChat } = useChat();

  return (
    <CreateChatContainer>
      <SendMessageInputWrapper>
        <SendMessageInput submitHandler={createChat} />
      </SendMessageInputWrapper>
    </CreateChatContainer>
  );
};

const CreateChatContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: calc(100vh - 32px);
  background: var(--secondary-bg-color);
  border-radius: 18px;
  box-shadow: var(--sidebar-shadow);
  padding: 16px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const SendMessageInputWrapper = styled.div`
  width: 100%;
  max-width: 600px;
`;

export default CreateChatPage;
