import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";

import { CreatePost } from "@/app/_components/create-post";
import { getServerAuthSession } from "@/server/auth";
import Image from "next/image";

export default async function Home() {
  noStore();
  const session = await getServerAuthSession();
  //     name: 'Marcus Almqvist',
  // email: 'marcus.w.almqvist@gmail.com',
  // image: 'https://lh3.googleusercontent.com/a/ACg8ocLsizWQKMqjRY8XMcJBARff-2Tm6zxsA7Z5uiFER3QuLtI=s96-c',
  // id: 'cltlh6qd00000h8h8yhxgycw9'

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <div className="fixed right-5 top-5  flex flex-col items-center gap-4 rounded-lg bg-slate-900 p-4 shadow-sm">
        {session?.user?.id && (
          <p className="text-center text-white">
            <span>Logged in as:</span>
          </p>
        )}
        {session?.user?.name && (
          <p className="text-center text-white">
            <span>{session.user?.name}</span>
          </p>
        )}
        {session?.user?.email && (
          <p className="text-center text-white">
            <span>{session.user?.email}</span>
          </p>
        )}
        {session?.user?.image && (
          <Image
            src={session.user?.image}
            alt="Profile picture"
            width={64}
            height={64}
            className="rounded-full"
          />
        )}
        <Link
          href={session ? "/api/auth/signout" : "/api/auth/signin"}
          className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
        >
          {session ? "Sign out" : "Sign in"}
        </Link>
      </div>
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl tracking-tight sm:text-[5rem]">STRYKERS</h1>

        <div className="flex flex-col items-center gap-2"></div>

        <CrudShowcase />
      </div>
    </main>
  );
}

async function CrudShowcase() {
  const session = await getServerAuthSession();
  if (!session?.user) return null;

  // const latestPost = await api.post.getLatest.query();

  return (
    <div className="w-full max-w-xs">
      {/* {latestPost ? (
        <p className="truncate">Your most recent stryk: {latestPost.name}</p>
      ) : (
        <p>You have stryk yet.</p>
      )} */}

      <CreatePost />
    </div>
  );
}
