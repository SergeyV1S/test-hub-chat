import styled from "styled-components";

import { CopyIcon } from "lucide-react";

import { copyToBuffer, getTime } from "@/shared/lib";
import { Button, Flex, Typography } from "@/shared/ui";

interface IUserMessageProps {
  content: string;
  created_at: string;
}

export const UserMessage = (props: IUserMessageProps) => (
  <UserMessageContainer $gap='10px' $alignItems='end'>
    <Button kind='void' size='small-icon' onClick={() => copyToBuffer(props.content)}>
      <CopyIcon size={15} />
    </Button>
    <UserMessageBody>
      <Typography kind='body-l-regular'>{props.content || "Произошла ошибка"}</Typography>
      <UserMessageTime kind='body-xs-regular'>{getTime(props.created_at)}</UserMessageTime>
    </UserMessageBody>
    <img src='/user.svg' alt='model_icon' />
  </UserMessageContainer>
);

const UserMessageContainer = styled(Flex)`
  max-width: 70%;
  align-self: flex-end;
`;

const UserMessageBody = styled.div`
  position: relative;
  background: var(--message-bg-color);
  padding: 14px;
  padding-right: 50px;
  border-radius: 10px 10px 0px 10px;
`;

const UserMessageTime = styled(Typography)`
  position: absolute;
  bottom: 8px;
  right: 8px;
`;
