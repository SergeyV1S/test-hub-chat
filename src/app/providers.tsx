import { RouterProvider } from "react-router-dom";

import { Provider } from "react-redux";

import { store } from "@/shared/store";

import { routes } from "./router";

export const Providers = () => (
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);
