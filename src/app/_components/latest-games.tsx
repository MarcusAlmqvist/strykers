import {
  TableCell,
  TableRow,
  TableBody,
  Table,
  TableHeader,
  TableHead,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { type Game } from "../dashboard/latest/stryktipset/page";

const LatestGames = ({ games }: { games: Game[] }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>#</TableHead>
          <TableHead>Match</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Resultat</TableHead>
          <TableHead>1</TableHead>
          <TableHead>X</TableHead>
          <TableHead>2</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {games?.map((game, index) => (
          <TableRow key={game.matchId}>
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell>
              {game.participants?.[0]?.name} - {game.participants?.[1]?.name}
            </TableCell>
            <TableCell>FT</TableCell>
            <TableCell>
              {game.outcomeScore?.home}-{game.outcomeScore?.away}
            </TableCell>
            <TableCell>
              <Button
                variant="outline"
                className={cn("mr-1", {
                  "bg-green-700 dark:bg-green-700": game.outcome === "1",
                  "bg-black": game.outcome === "2" || game.outcome === "X",
                })}
              >
                1
              </Button>
            </TableCell>
            <TableCell>
              <Button
                className={cn("mr-1", {
                  "bg-black": game.outcome === "1" || game.outcome === "2",
                  "bg-green-700 dark:bg-green-700": game.outcome === "X",
                })}
                variant="outline"
              >
                X
              </Button>
            </TableCell>
            <TableCell>
              <Button
                variant="outline"
                className={cn({
                  "bg-black": game.outcome === "1" || game.outcome === "X",
                  "bg-green-700 dark:bg-green-700": game.outcome === "2",
                })}
              >
                2
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default LatestGames;
