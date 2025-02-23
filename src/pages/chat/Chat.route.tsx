import { Suspense, lazy } from "react";
import type { RouteObject } from "react-router-dom";

import { paths } from "@/shared/constants";

const ChatScreen = lazy(() => import("./ChatPage"));

export const createChatScreenRoute = (): RouteObject => ({
  path: `${paths.CHAT}/:chatId`,
  element: (
    <Suspense fallback={<div />}>
      <ChatScreen />
    </Suspense>
  ),
  errorElement: <div className=''>Error</div>
});
