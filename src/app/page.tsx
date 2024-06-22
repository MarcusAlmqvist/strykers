import { unstable_noStore as noStore } from "next/cache";

import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";
import SignInButton from "./_components/sign-in";

export default async function Home() {
  noStore();
  const session = await getServerAuthSession();

  const isSignedIn = session?.user?.id;

  if (isSignedIn) {
    redirect("/dashboard");
  }
  return (
    <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
      <header className="flex flex-col items-center gap-2">
        <h1 className="text-5xl tracking-tight sm:text-[5rem]">STRYKERS</h1>
      </header>
      {!isSignedIn && <SignInButton />}
    </div>
  );
}
