import { AuthLayout, SignInPage, SignUpPage } from "@modules/auth";
import { ProfilePage } from "@modules/user/profile";
import { createBrowserRouter } from "react-router-dom";

import { PATHS } from "@shared/constants";

import { PrivateRoute } from "./PrivateRoute";
import { RootPage } from "./RootPage";

export const routes = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: PATHS.SIGNIN,
        element: <SignInPage />
      },
      {
        path: PATHS.SIGNUP,
        element: <SignUpPage />
      }
    ]
  },
  {
    path: "/",
    element: <RootPage />
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: PATHS.PROFILE,
        element: <ProfilePage />
      }
    ]
  }
]);
