import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { routes } from "./router";
import { store } from "./store";

export const Providers = () => (
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);
