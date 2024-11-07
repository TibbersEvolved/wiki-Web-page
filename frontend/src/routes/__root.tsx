import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import "../../css/style.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const Route = createRootRoute({
  component: RootComponent,
});

const queryClient = new QueryClient();

function RootComponent() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="p-2 flex justify-center gap-4 bg-gray-600 shadow-inner border-b-2 border-solid border-gray-500">
          <Link
            to="/"
            className="btn btn-primary btn-sm"
            activeProps={{
              className: "font-bold",
            }}
            activeOptions={{ exact: true }}
          >
            Home
          </Link>{" "}
          <Link
            to="/gems"
            className="btn btn-primary btn-sm"
            activeProps={{
              className: "font-bold",
            }}
          >
            Gems
          </Link>
        </div>
        <hr />
        <Outlet />
      </QueryClientProvider>
    </>
  );
}
