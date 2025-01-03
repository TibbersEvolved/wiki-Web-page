import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import "../../css/style.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClerkProvider } from "@clerk/clerk-react";
import MainNavBar from "../components/mainNavBar";

export const Route = createRootRoute({
  component: RootComponent,
});

const PUBLISHABLE_KEY = import.meta.env.VITE_APIKEY;
const queryClient = new QueryClient();

function RootComponent() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
          <MainNavBar />
          <hr />
          <Outlet />
        </ClerkProvider>
      </QueryClientProvider>
    </>
  );
}
