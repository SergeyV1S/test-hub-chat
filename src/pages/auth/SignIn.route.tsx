import { PATHS } from "@/shared/constants";
import { Spinner } from "@/shared/ui";
import { Suspense, lazy } from "react";
import type { RouteObject } from "react-router-dom";

const SignInScreen = lazy(() => import("./SignIn"));

export const createSignInScreenRoute = (): RouteObject => ({
  path: PATHS.SIGNIN,
  element: (
    <Suspense fallback={<Spinner />}>
      <SignInScreen />
    </Suspense>
  ),
  errorElement: <div className=''>Error</div>
});
