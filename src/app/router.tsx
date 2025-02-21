import { createBrowserRouter } from "react-router-dom";

import { createChatScreenRoute, createSignInScreenRoute } from "@/pages";
import { ChatLayout } from "@/shared/layouts";

export const routes = createBrowserRouter([
  {
    element: <ChatLayout />,
    children: [createChatScreenRoute()]
  },
  createSignInScreenRoute()
]);
