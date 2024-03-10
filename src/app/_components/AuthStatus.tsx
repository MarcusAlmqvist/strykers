import { getServerAuthSession } from "@/server/auth";
import Link from "next/link";
import { unstable_noStore as noStore } from "next/cache";
import Image from "next/image";

const AuthStatus = async () => {
  noStore();
  const session = await getServerAuthSession();
  return (
    <div className="scroll:collapse z-10 flex w-full flex-row items-center justify-between gap-4 bg-[blue] p-4 text-[yellow] shadow-sm sm:sticky sm:top-0 sm:px-24">
      <div className="flex flex-row items-center gap-4">
        {session?.user?.image && (
          <Image
            src={session.user?.image}
            alt="Profile picture"
            width={48}
            height={48}
            className="rounded-full"
          />
        )}
        {session?.user?.name && (
          <p className="text-center ">
            <span>{session.user?.name}</span>
          </p>
        )}
      </div>
      <div className="flex flex-row items-center">
        {session?.user.id && (
          <Link
            href={"/"}
            className="px-10 py-3 font-semibold transition hover:underline"
          >
            Senaste omgången
          </Link>
        )}
        {session?.user.id && (
          <Link
            href={"/round"}
            className="px-10 py-3 font-semibold transition hover:underline"
          >
            Tidigare omgångar
          </Link>
        )}
      </div>
      <Link
        href={session ? "/api/auth/signout" : "/api/auth/signin"}
        className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
      >
        {session ? "Sign out" : "Sign in"}
      </Link>
    </div>
  );
};

export default AuthStatus;
