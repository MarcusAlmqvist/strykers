import LatestGames from "@/app/_components/latest-games";

export type Game = {
  eventNumber?: number;
  eventComment?: string;
  eventDescription?: string;
  cancelled?: boolean;
  outcome?: string;
  outcomeDescription?: string;
  outcomeScore?: {
    home?: number;
    away?: number;
  };
  matchId?: number;
  participantType?: string;
  participants?: {
    id?: number;
    name?: string;
    type?: string;
    trend?: string;
    goalAvg?: number;
    shortName?: string;
    mediumName?: string;
    countryId?: number;
    countryName?: string;
    isoCode?: string;
    managerId?: number;
    arenaId?: number;
  }[];
};

async function RoundLandingPage() {
  const games = await fetch(
    "https://api.spela.svenskaspel.se/draw/1/stryktipset/draws/result",
  )
    .then(
      /* async (res) => {
    const response = await res.json();
    return response.results?.events as Game[];
  } */
      (res) => res.json() as Promise<{ result: { events: Game[] } }>,
    )
    .then((response) => {
      return response?.result?.events || [];
    });

  return <LatestGames games={games} />;
}

export default RoundLandingPage;
