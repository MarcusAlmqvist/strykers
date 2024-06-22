import Link from "next/link";
import { getWeek } from "date-fns";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const firstDate = new Date("2024-06-16T00:00:00.000Z");
const firstRound = {
  id: 4853,
  week: getWeek(firstDate),
};
const currentDate = new Date();
const roundsSinceFirstRound = Math.floor(
  (currentDate.getTime() - firstDate.getTime()) / (1000 * 60 * 60 * 24 * 7),
);

const rounds = Array.from({ length: roundsSinceFirstRound + 1 }).map(
  (_, i) => ({
    id: firstRound.id + i,
    week: firstRound.week + i,
    dates: {
      start: new Date(firstDate.getTime() + i * 7 * 24 * 60 * 60 * 1000),
      end: new Date(firstDate.getTime() + (i + 1) * 7 * 24 * 60 * 60 * 1000),
    },
  }),
);

function RoundLandingPage() {
  return (
    <div className="container flex flex-col items-center justify-center gap-12 px-4 py-2">
      <h2 className="text-3xl">Omgångar</h2>
      <ul className="flex w-full flex-row flex-wrap justify-center gap-4">
        {rounds.map((round) => (
          <li key={round.id}>
            <Link
              href={`/dashboard/rounds/${round.id}`}
              className={cn(
                buttonVariants({
                  variant: "link",
                }),
                "flex h-full flex-col items-center",
              )}
            >
              <Badge>Vecka {round.week}</Badge>
              <p>
                {round.dates.start.toLocaleDateString()} -{" "}
                {round.dates.end.toLocaleDateString()}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RoundLandingPage;
