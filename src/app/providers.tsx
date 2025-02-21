import { store } from "@/shared/store";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { routes } from "./router";

export const Providers = () => (
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);
