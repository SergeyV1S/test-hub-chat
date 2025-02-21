import { PATHS } from "@/shared/constants";
import { Spinner } from "@/shared/ui";
import { Suspense, lazy } from "react";
import type { RouteObject } from "react-router-dom";

const ChatScreen = lazy(() => import("./ChatPage"));

export const createChatScreenRoute = (): RouteObject => ({
  path: PATHS.CHAT,
  element: (
    <Suspense fallback={<Spinner />}>
      <ChatScreen />
    </Suspense>
  ),
  errorElement: <div className=''>Error</div>
});
