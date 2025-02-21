import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import { Spinner } from "@shared/ui/spinner";

const RootScreen = lazy(() => import("./RootPage"));

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Spinner />}>
        <RootScreen />
      </Suspense>
    )
  }
]);
