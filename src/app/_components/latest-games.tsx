"use client";

import { useQuery } from "@tanstack/react-query";
import { TableCell, TableRow, TableBody, Table } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LatestGames = () => {
  const {
    data: svsGames,
    isLoading,
    isError,
  } = useQuery(["latestGames"], () =>
    fetch(
      "https://api.spela.svenskaspel.se/draw/1/stryktipset/draws/result",
    ).then(
      (res) =>
        res.json() as Promise<{
          result?: {
            events?: {
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
            }[];
          };
        }>,
    ),
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <>
      <h2 className=" text-2xl font-semibold">Senaste matcherna</h2>
      <Table>
        <TableBody>
          {svsGames?.result?.events?.map((game, index) => (
            <TableRow key={game.matchId}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>
                {game.participants?.[0]?.name} - {game.participants?.[1]?.name}
              </TableCell>
              <TableCell>FT</TableCell>
              <TableCell>
                {game.outcomeScore?.home}-{game.outcomeScore?.away}
              </TableCell>
              <Button
                variant="outline"
                className={cn("mr-1", {
                  "bg-green-500": game.outcome === "1",
                  "bg-gray-500": game.outcome === "2" || game.outcome === "X",
                })}
              >
                1
              </Button>
              <Button
                className={cn("mr-1", {
                  "bg-gray-500": game.outcome === "1" || game.outcome === "2",
                  "bg-green-500": game.outcome === "X",
                })}
                variant="outline"
              >
                X
              </Button>
              <Button
                variant="outline"
                className={cn({
                  "bg-gray-500": game.outcome === "1" || game.outcome === "X",
                  "bg-green-500": game.outcome === "2",
                })}
              >
                2
              </Button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default LatestGames;
