"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

function SignOutButton() {
  return (
    <Button
      variant="secondary"
      onClick={() =>
        signOut({
          callbackUrl: "/",
        })
      }
    >
      Sign Out
    </Button>
  );
}

export default SignOutButton;
