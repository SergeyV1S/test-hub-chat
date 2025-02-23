import { useEffect, useState } from "react";

import { chatSliceSelectors, getChatsActionCreator } from "@/entity/chat";
import { DeleteChatButton } from "@/features/delete-chat";
import { LogoutButton } from "@/features/logout";
import type { TSignInFormSchema } from "@/features/sign-in";
import { localStorageKeys, paths } from "@/shared/constants";
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

  const [language, setLanguage] = useState("RU");
  const userData = JSON.parse(
    localStorage.getItem(localStorageKeys.USER_DATA)!
  ) as TSignInFormSchema;

  useEffect(() => {
    if (chatList.length === 0) {
      dispatch(getChatsActionCreator());
    }
  }, []);

  return (
    <Sidebar>
      <SidebarHeader>
        <Flex $justifyContent='space-between' $alignItems='center' width='100%'>
          <img src='/bot_hub_logo.png' alt='logo' />
          <Select options={["RU", "EN"]} value={language} onChange={(value) => setLanguage(value)}>
            <img src='/net.svg' alt='network_icon' />
          </Select>
        </Flex>
        <Flex $gap='16px'>
          <StyledLinkButton size='icon' kind='primary' to={paths.CHAT}>
            <img style={{ width: 20 }} src='/add_chat.svg' alt='add_chat_icon' />
          </StyledLinkButton>
          <Button size='icon' kind='outlined'>
            <img style={{ width: 20 }} src='/search.svg' alt='add_chat_icon' />
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
                <img style={{ width: 20 }} src='/chat.svg' alt='chat_icon' />
                <Typography kind='body-m-medium' as='p'>
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
