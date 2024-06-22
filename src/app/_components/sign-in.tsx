"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
function SignInButton() {
  return (
    <Button
      variant="outline"
      onClick={() => signIn("google", { callbackUrl: "/" })}
    >
      Logga in med Google
    </Button>
  );
}

export default SignInButton;
