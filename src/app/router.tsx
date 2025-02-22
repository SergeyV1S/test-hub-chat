import { createBrowserRouter } from "react-router-dom";

import {
  createChatScreenRoute,
  createCreateChatScreenRoute,
  createSignInScreenRoute
} from "@/pages";
import { ChatLayout } from "@/shared/layouts";

import { PrivateRoute } from "./PrivateRoute";

export const routes = createBrowserRouter([
  {
    element: <PrivateRoute />,
    children: [
      {
        element: <ChatLayout />,
        children: [createCreateChatScreenRoute(), createChatScreenRoute()]
      },
      createSignInScreenRoute()
    ]
  }
]);
