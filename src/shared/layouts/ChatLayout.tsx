import { Outlet } from "react-router-dom";

import { Container } from "../ui";

export const ChatLayout = () => (
  <Container>
    <aside>Сайдбар</aside>
    <Outlet />
  </Container>
);
