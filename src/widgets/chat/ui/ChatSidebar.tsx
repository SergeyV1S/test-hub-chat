import { useEffect, useState } from "react";
import styled from "styled-components";

import { GlobeIcon, MessageSquareIcon, MessageSquarePlusIcon, SearchIcon } from "lucide-react";

import { chatSliceSelectors, getChatsActionCreator } from "@/entity/chat";
import { DeleteChatButton } from "@/features/delete-chat";
import { LogoutButton } from "@/features/logout";
import type { TSignInFormSchema } from "@/features/sign-in";
import { localStorageKeys, paths } from "@/shared/constants";
import { useLocalStorage } from "@/shared/hooks";
import { useAppDispatch, useAppSelector } from "@/shared/store";
import {
  Button,
  Flex,
  Grid,
  Select,
  Separator,
  Spinner,
  StyledLinkButton,
  StyledNavLink,
  Typography
} from "@/shared/ui";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "@/shared/ui/sidebar";

export const ChatSidebar = () => {
  const dispatch = useAppDispatch();
  const { chatList, isLoading, isChatListFetched } = useAppSelector(
    chatSliceSelectors.getChatState
  );

  const { getValueFromLocalStorage } = useLocalStorage();

  const [language, setLanguage] = useState("RU");
  const userData = JSON.parse(
    getValueFromLocalStorage(localStorageKeys.USER_DATA)!
  ) as TSignInFormSchema;

  useEffect(() => {
    if (chatList.length === 0) {
      dispatch(getChatsActionCreator());
    }
  }, []);

  return (
    <Sidebar>
      <SidebarHeader>
        <ChangeLanguageBlock>
          <img src='/bot_hub_logo.png' alt='logo' />
          <Select options={["RU", "EN"]} value={language} onChange={(value) => setLanguage(value)}>
            <GlobeIcon size={19} />
          </Select>
        </ChangeLanguageBlock>
        <Flex $gap='16px'>
          <StyledLinkButton size='icon' kind='primary' to={paths.CHAT}>
            <MessageSquarePlusIcon size={20} color='white' />
          </StyledLinkButton>
          <Button size='icon' kind='outlined'>
            <SearchIcon size={20} />
          </Button>
        </Flex>
      </SidebarHeader>
      <Separator />
      <SidebarContent as='nav'>
        {isLoading && !isChatListFetched && <Spinner size={40} />}
        {isChatListFetched && chatList.length !== 0 ? (
          chatList.map((chat) => (
            <StyledNavLink key={chat.id} to={chat.id} onClick={(e) => e.stopPropagation()}>
              <Grid $columns='20px 1fr 30px' $alignItems='center'>
                <MessageSquareIcon size={20} />
                <Typography kind='body-m-medium' truncate>
                  {chat.name}
                </Typography>
                <DeleteChatButton chatId={chat.id} />
              </Grid>
            </StyledNavLink>
          ))
        ) : (
          <Typography kind='body-m-medium'>Нет чатов</Typography>
        )}
      </SidebarContent>
      <SidebarFooter>
        <Grid
          $columns='30px 1fr 40px'
          $alignItems='center'
          style={{
            borderRadius: 18,
            border: "1px solid var(--outlined-border-color)",
            height: 72,
            padding: 16
          }}
        >
          <img style={{ width: 30 }} src='/user.svg' alt='chat_icon' />
          <div>
            <Typography kind='body-m-semibold' as='p'>
              {userData.name}
            </Typography>
            <Typography kind='body-s-medium' as='p'>
              9 012 TKN
            </Typography>
          </div>
          <LogoutButton />
        </Grid>
      </SidebarFooter>
    </Sidebar>
  );
};

const ChangeLanguageBlock = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: start;
    gap: 70px;
  }
`;
