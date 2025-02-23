import { RouterProvider } from "react-router-dom";

import { Provider } from "react-redux";

import { store } from "@/shared/store";
import { GlobalStyle } from "@/shared/styles/global";

import { routes } from "./router";

export const Providers = () => (
  <Provider store={store}>
    <GlobalStyle />
    <RouterProvider router={routes} />
  </Provider>
);
