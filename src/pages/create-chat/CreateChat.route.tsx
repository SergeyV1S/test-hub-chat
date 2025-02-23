import { Suspense, lazy } from "react";
import type { RouteObject } from "react-router-dom";

import { paths } from "@/shared/constants";
import { Spinner } from "@/shared/ui";

const CreateChatScreen = lazy(() => import("./CreateChatPage"));

export const createCreateChatScreenRoute = (): RouteObject => ({
  path: paths.CHAT,
  element: (
    <Suspense fallback={<Spinner />}>
      <CreateChatScreen />
    </Suspense>
  ),
  errorElement: <div className=''>Error</div>
});
