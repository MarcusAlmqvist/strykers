import { unstable_noStore as noStore } from "next/cache";

import { getServerAuthSession } from "@/server/auth";
import LatestCoupon from "./_components/latest-coupon";
import AllUserCoupons from "./_components/all-user-coupons";
import CreateCoupon from "./_components/create-coupon";
import LatestGames from "./_components/latest-games";

export default async function Home() {
  noStore();
  const session = await getServerAuthSession();

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-black text-[yellow]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <header className="flex flex-col items-center gap-2">
            <h1 className="text-5xl tracking-tight sm:text-[5rem]">STRYKERS</h1>
          </header>

          <div className="flex flex-col items-center gap-2"></div>
          {session?.user?.id && <LatestGames />}
          <LatestCoupon />
          <AllUserCoupons />
          {session?.user?.id && <CreateCoupon />}
        </div>
      </main>
    </>
  );
}
