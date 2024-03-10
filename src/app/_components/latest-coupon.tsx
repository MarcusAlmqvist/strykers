import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";

export default async function LatestCoupon() {
  const session = await getServerAuthSession();
  if (!session?.user) return null;

  const latestCoupon = await api.stryktips.getLatest.query({});

  return (
    <div className="w-full max-w-xs">
      {latestCoupon ? (
        <p className="truncate">
          Ditt senaste stryk: {latestCoupon.name} - {latestCoupon.description}
        </p>
      ) : (
        <p>
          Du har inga stryktips registrerade än! Kom igång i formuläret nedan
        </p>
      )}
    </div>
  );
}
