import { Suspense, lazy } from "react";
import type { RouteObject } from "react-router-dom";

import { paths } from "@/shared/constants";
import { Spinner } from "@/shared/ui";

const ChatScreen = lazy(() => import("./ChatPage"));

export const createChatScreenRoute = (): RouteObject => ({
  path: paths.CHAT,
  element: (
    <Suspense fallback={<Spinner />}>
      <ChatScreen />
    </Suspense>
  ),
  errorElement: <div className=''>Error</div>
});
