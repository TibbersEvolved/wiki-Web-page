import {
  SignedOut,
  SignInButton,
  SignedIn,
  UserButton,
} from "@clerk/clerk-react";
import { Link } from "@tanstack/react-router";

export default function MainNavBar() {
  return (
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
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
