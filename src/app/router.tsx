import { createChatScreenRoute, createSignInScreenRoute } from "@/pages";
import { ChatLayout } from "@/shared/layouts";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    element: <ChatLayout />,
    children: [createChatScreenRoute()]
  },
  createSignInScreenRoute()
]);
