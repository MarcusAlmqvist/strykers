"use client";

import type { Round as RoundType } from "@/types/rounds";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "@/components/ui/table";

const RoundTable = ({ roundResults }: { roundResults: RoundType }) => {
  return (
    <Table>
      <TableCaption>Resultat</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Match</TableHead>
          <TableHead>Resultat</TableHead>
          <TableHead>Halvtid</TableHead>
          <TableHead>Fulltid</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {roundResults?.draw?.drawEvents.map((event) => (
          <TableRow key={event.eventNumber}>
            <TableCell>{event.eventDescription}</TableCell>
            <TableCell>
              {event?.match?.result[0]?.home}-{event?.match?.result[0]?.away}
            </TableCell>
            <TableCell>
              {event?.match?.result[1]?.home}-{event?.match?.result[1]?.away}
            </TableCell>
            <TableCell>
              {event?.match?.result[3]?.home}-{event?.match?.result[3]?.away}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default RoundTable;
