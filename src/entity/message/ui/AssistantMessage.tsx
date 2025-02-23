import styled from "styled-components";

import { CopyIcon } from "lucide-react";

import { copyToBuffer, getTime } from "@/shared/lib";
import { Button, Flex, Grid, Typography } from "@/shared/ui";

interface IAssistantMessageProps {
  content: string;
  model: string;
  tokens: number;
  created_at: string;
}

export const AssistantMessage = (props: IAssistantMessageProps) => (
  <AssistantMessageContainer $alignItems='center' $rowGap='10px'>
    <Grid $columns='40px 1fr' $alignItems='center'>
      <div className='' />
      <Flex $alignItems='center' $gap='10px'>
        <Typography kind='body-m-regular'>{props.model}</Typography>
        <AssistantMessageModelType>
          <Typography kind='body-s-medium'>{props.model}</Typography>
        </AssistantMessageModelType>
      </Flex>
    </Grid>
    <Flex $justifyContent='center' $gap='14px'>
      <img src='/user.svg' alt='model_icon' />
      <Typography kind='body-l-regular'>{props.content || "Произошла ошибка"}</Typography>
    </Flex>
    <Grid $columns='40px 1fr 50px' $alignItems='center'>
      <div className='' />
      <Flex $alignItems='center' $justifySelf='start' $gap='16px'>
        {props.tokens !== 0 && <Typography kind='body-m-regular'>-{props.tokens} CAPS</Typography>}
        <Button kind='void' size='small-icon' onClick={() => copyToBuffer(props.content)}>
          <CopyIcon size={15} />
        </Button>
      </Flex>
      <Typography kind='body-xs-regular'>{getTime(props.created_at)}</Typography>
    </Grid>
  </AssistantMessageContainer>
);

const AssistantMessageContainer = styled(Grid)`
  width: 70%;
`;

export const AssistantMessageModelType = styled.div`
  padding: 4px 12px;
  background: var(--bg-card-color);
  border-radius: 14px;
`;
