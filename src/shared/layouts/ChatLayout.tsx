import { Outlet } from "react-router-dom";

export const ChatLayout = () => (
  <div>
    <aside>Сайдбар</aside>
    <Outlet />
  </div>
);
