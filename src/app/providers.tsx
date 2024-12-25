import { QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";

import { queryClient } from "@shared/constants/queryClient";
import { Spinner } from "@shared/ui/spinner";
import { Toaster } from "@shared/ui/toaster";

import { routes } from "./router";

export const Providers = () => (
  <QueryClientProvider client={queryClient}>
    <Suspense fallback={<Spinner />}>
      <RouterProvider router={routes} />
      <Toaster />
    </Suspense>
  </QueryClientProvider>
);
