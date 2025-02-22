import { useState } from "react";

import type { TSignInFormSchema } from "@/features/auth";
import { localStorageKeys } from "@/shared/constants";
import { Button, Flex, Grid, Select, Separator, Typography } from "@/shared/ui";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "@/shared/ui/sidebar";

export const ChatSidebar = () => {
  const [language, setLanguage] = useState("RU");
  const userData = JSON.parse(
    localStorage.getItem(localStorageKeys.USER_DATA) || ""
  ) as TSignInFormSchema;

  return (
    <Sidebar>
      <SidebarHeader>
        <Flex justifyContent='space-between' alignItems='center' width='100%'>
          <img src='/bot_hub_logo.png' alt='logo' />
          <Select
            options={["RU", "EN"]}
            value={language}
            onChange={(value) => setLanguage(value)}
          />
        </Flex>
        <Flex gap='16px'>
          <Button size='icon'>
            <img style={{ width: 20 }} src='/add_chat.svg' alt='add_chat_icon' />
          </Button>
          <Button size='icon' kind='outlined'>
            <img style={{ width: 20 }} src='/search.svg' alt='add_chat_icon' />
          </Button>
        </Flex>
      </SidebarHeader>
      <Separator />
      <SidebarContent>
        <Grid columns='20px 1fr 20px'>
          <img style={{ width: 20 }} src='/chat.svg' alt='chat_icon' />
          <Typography kind='body-m-medium' as='p'>
            Элемент 1
          </Typography>
          <img style={{ width: 13 }} src='/trash.svg' alt='trash_icon' />
        </Grid>
        <Grid columns='20px 1fr 20px'>
          <img style={{ width: 20 }} src='/chat.svg' alt='chat_icon' />
          <Typography kind='body-m-medium' as='p'>
            Элемент 1
          </Typography>
          <img style={{ width: 13 }} src='/trash.svg' alt='trash_icon' />
        </Grid>
      </SidebarContent>
      <SidebarFooter>
        <Grid
          columns='30px 1fr 40px'
          alignItems='center'
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
          <Button kind='outlined' size='icon'>
            <img style={{ width: 13 }} src='/exit.svg' alt='trash_icon' />
          </Button>
        </Grid>
      </SidebarFooter>
    </Sidebar>
  );
};
