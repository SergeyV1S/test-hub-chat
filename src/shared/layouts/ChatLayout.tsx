import { Outlet } from "react-router-dom";

import { ChatSidebar } from "@/widgets/chat";

import { Container } from "../ui";

export const ChatLayout = () => (
  <Container>
    <ChatSidebar />
    <Outlet />
  </Container>
);
