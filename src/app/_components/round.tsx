"use client";

import { useQuery } from "@tanstack/react-query";
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

const Round = ({ round }: { round: string }) => {
  const {
    data: roundResults,
    isLoading,
    isError,
  } = useQuery(["round", round], () =>
    fetch(
      `https://api.spela.svenskaspel.se/draw/1/stryktipset/draws/${round}`,
    ).then((res) => res.json() as Promise<RoundType>),
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div>
      <h1>{roundResults?.draw?.productName}</h1>
      <h2>{roundResults?.draw?.drawComment}</h2>
      <div>{roundResults?.draw?.drawState}</div>
      <Table>
        <TableCaption>Resultat</TableCaption>
        <TableHeader>
          <TableHead>Match</TableHead>
          <TableHead>Resultat</TableHead>
          <TableHead>Halvtid</TableHead>
          <TableHead>Fulltid</TableHead>
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
    </div>
  );
};

export default Round;

//
// {
//   "draw": {
//       "productName": "Stryktipset",
//       "seasonLastDraw": false,
//       "productId": 1,
//       "currentNetSale": "28624498,00",
//       "regCloseDescription": "Stryktipset v 2, stänger 2024-01-13 15:59",
//       "extraInfo": null,
//       "drawNumber": 4830,
//       "betIndex": 0,
//       "drawState": "Finalized",
//       "drawStateId": 20,
//       "regBetDisabled": "NotDisabled",
//       "regOpenTime": "2024-01-08T19:00:00+01:00",
//       "regCloseTime": "2024-01-13T15:59:00+01:00",
//       "cancelCloseTime": "2024-01-13T16:00:00+01:00",
//       "sport": {
//           "id": 1,
//           "type": 1,
//           "name": "Fotboll",
//           "numCountries": 0
//       },
//       "drawComment": "Stryktipset v. 2024-2",
//       "bombenDrawNum": 840,
//       "relatedDraws": [
//           {
//               "productId": 23,
//               "drawNumber": 840,
//               "regCloseTime": "2024-01-13T15:59:00+01:00"
//           }
//       ],
//       "rowPrice": "1,00",
//       "fund": null,
//       "drawEvents": [
//           {
//               "cancelled": false,
//               "eventComment": "",
//               "eventDescription": "Newcastle - Man City",
//               "extraInfo": null,
//               "eventNumber": 1,
//               "eventTypeId": 1,
//               "participantType": "Team",
//               "match": {
//                   "matchId": 29469,
//                   "matchStart": "2024-01-13T18:30:00+01:00",
//                   "status": "Slut",
//                   "statusId": 31,
//                   "sportEventStatus": "Ended",
//                   "statusTime": "2024-01-13T20:28:50+01:00",
//                   "coverage": 0,
//                   "participants": [
//                       {
//                           "id": 88,
//                           "type": "home",
//                           "name": "Newcastle",
//                           "trend": 0,
//                           "goalAvg": null,
//                           "result": "2",
//                           "shortName": "NEW",
//                           "mediumName": "Newcastle",
//                           "countryId": 2,
//                           "countryName": "England",
//                           "isoCode": "ENG",
//                           "managerId": 0,
//                           "arenaId": 0
//                       },
//                       {
//                           "id": 2,
//                           "type": "away",
//                           "name": "Manchester City",
//                           "trend": 0,
//                           "goalAvg": null,
//                           "result": "3",
//                           "shortName": "MNC",
//                           "mediumName": "Man City",
//                           "countryId": 2,
//                           "countryName": "England",
//                           "isoCode": "ENG",
//                           "managerId": 0,
//                           "arenaId": 0
//                       }
//                   ],
//                   "league": {
//                       "id": 1,
//                       "uniqueLeagueId": 0,
//                       "name": "Premier League",
//                       "shortName": null,
//                       "country": {
//                           "id": 2,
//                           "name": "England",
//                           "isoCode": "ENG",
//                           "population": 0
//                       },
//                       "code": null,
//                       "printAbbreviation": null,
//                       "season": null,
//                       "doShow": false,
//                       "isHome": false,
//                       "legacyKey": 0,
//                       "numTeams": 0,
//                       "popular": false,
//                       "rank": 0
//                   },
//                   "leagueTable": null,
//                   "result": [
//                       {
//                           "type": 9,
//                           "sportEventResultType": "Current",
//                           "description": "Current",
//                           "home": "2",
//                           "away": "3",
//                           "homePeriod": null,
//                           "awayPeriod": null
//                       },
//                       {
//                           "type": 1,
//                           "sportEventResultType": "Halftime",
//                           "description": "Mid time",
//                           "home": "2",
//                           "away": "1",
//                           "homePeriod": null,
//                           "awayPeriod": null
//                       },
//                       {
//                           "type": 6,
//                           "sportEventResultType": "Period2",
//                           "description": "Period 2",
//                           "home": "0",
//                           "away": "2",
//                           "homePeriod": null,
//                           "awayPeriod": null
//                       },
//                       {
//                           "type": 2,
//                           "sportEventResultType": "Fulltime",
//                           "description": "Full time",
//                           "home": "2",
//                           "away": "3",
//                           "homePeriod": null,
//                           "awayPeriod": null
//                       }
//                   ],
//                   "media": null,
//                   "mutuals": null
//               },
//               "odds": null,
//               "favouriteOdds": null,
//               "startOdds": {
//                   "one": "5,45",
//                   "x": "4,40",
//                   "two": "1,55"
//               },
//               "betMetrics": {
//                   "eventTypeId": 1,
//                   "eventType": "1X2",
//                   "eventSubTypeId": 2,
//                   "eventSubType": "Fulltid",
//                   "distributionDate": "2024-01-13T16:00:01.081+01:00",
//                   "distributionRefDate": "2024-01-13T15:44:23.97+01:00",
//                   "values": [
//                       {
//                           "outcome": "1",
//                           "odds": {
//                               "odds": null,
//                               "favouriteOdds": null,
//                               "startOdds": "5,45"
//                           },
//                           "distribution": {
//                               "distribution": "16",
//                               "refDistribution": "16"
//                           }
//                       },
//                       {
//                           "outcome": "X",
//                           "odds": {
//                               "odds": null,
//                               "favouriteOdds": null,
//                               "startOdds": "4,40"
//                           },
//                           "distribution": {
//                               "distribution": "19",
//                               "refDistribution": "19"
//                           }
//                       },
//                       {
//                           "outcome": "2",
//                           "odds": {
//                               "odds": null,
//                               "favouriteOdds": null,
//                               "startOdds": "1,55"
//                           },
//                           "distribution": {
//                               "distribution": "65",
//                               "refDistribution": "65"
//                           }
//                       }
//                   ]
//               },
//               "complementaryBetMetrics": [],
//               "outcomes": null,
//               "svenskaFolket": {
//                   "one": "16",
//                   "x": "19",
//                   "two": "65",
//                   "date": "2024-01-13T16:00:01.081+01:00",
//                   "refOne": "16",
//                   "refX": "19",
//                   "refTwo": "65",
//                   "refDate": "2024-01-13T15:44:23.97+01:00"
//               },
//               "tioTidningarsTips": {
//                   "one": 1,
//                   "x": 0,
//                   "two": 9
//               },
//               "providerIds": [
//                   {
//                       "provider": "BetRadar",
//                       "type": "Normal",
//                       "id": "41763257"
//                   }
//               ]
//           },
//           {
//               "cancelled": false,
//               "eventComment": "",
//               "eventDescription": "Ipswich - Sunderlan",
//               "extraInfo": null,
//               "eventNumber": 2,
//               "eventTypeId": 1,
//               "participantType": "Team",
//               "match": {
//                   "matchId": 29477,
//                   "matchStart": "2024-01-13T18:30:00+01:00",
//                   "status": "Slut",
//                   "statusId": 31,
//                   "sportEventStatus": "Ended",
//                   "statusTime": "2024-01-13T20:28:10+01:00",
//                   "coverage": 0,
//                   "participants": [
//                       {
//                           "id": 110,
//                           "type": "home",
//                           "name": "Ipswich",
//                           "trend": 0,
//                           "goalAvg": null,
//                           "result": "2",
//                           "shortName": "IPS",
//                           "mediumName": "Ipswich",
//                           "countryId": 2,
//                           "countryName": "England",
//                           "isoCode": "ENG",
//                           "managerId": 0,
//                           "arenaId": 0
//                       },
//                       {
//                           "id": 129,
//                           "type": "away",
//                           "name": "Sunderland",
//                           "trend": 0,
//                           "goalAvg": null,
//                           "result": "1",
//                           "shortName": "SUN",
//                           "mediumName": "Sunderlan",
//                           "countryId": 2,
//                           "countryName": "England",
//                           "isoCode": "ENG",
//                           "managerId": 0,
//                           "arenaId": 0
//                       }
//                   ],
//                   "league": {
//                       "id": 6,
//                       "uniqueLeagueId": 0,
//                       "name": "Championship",
//                       "shortName": null,
//                       "country": {
//                           "id": 2,
//                           "name": "England",
//                           "isoCode": "ENG",
//                           "population": 0
//                       },
//                       "code": null,
//                       "printAbbreviation": null,
//                       "season": null,
//                       "doShow": false,
//                       "isHome": false,
//                       "legacyKey": 0,
//                       "numTeams": 0,
//                       "popular": false,
//                       "rank": 0
//                   },
//                   "leagueTable": null,
//                   "result": [
//                       {
//                           "type": 9,
//                           "sportEventResultType": "Current",
//                           "description": "Current",
//                           "home": "2",
//                           "away": "1",
//                           "homePeriod": null,
//                           "awayPeriod": null
//                       },
//                       {
//                           "type": 1,
//                           "sportEventResultType": "Halftime",
//                           "description": "Mid time",
//                           "home": "1",
//                           "away": "1",
//                           "homePeriod": null,
//                           "awayPeriod": null
//                       },
//                       {
//                           "type": 6,
//                           "sportEventResultType": "Period2",
//                           "description": "Period 2",
//                           "home": "1",
//                           "away": "0",
//                           "homePeriod": null,
//                           "awayPeriod": null
//                       },
//                       {
//                           "type": 2,
//                           "sportEventResultType": "Fulltime",
//                           "description": "Full time",
//                           "home": "2",
//                           "away": "1",
//                           "homePeriod": null,
//                           "awayPeriod": null
//                       }
//                   ],
//                   "media": null,
//                   "mutuals": null
//               },
//               "odds": null,
//               "favouriteOdds": null,
//               "startOdds": {
//                   "one": "2,05",
//                   "x": "3,38",
//                   "two": "3,50"
//               },
//               "betMetrics": {
//                   "eventTypeId": 1,
//                   "eventType": "1X2",
//                   "eventSubTypeId": 2,
//                   "eventSubType": "Fulltid",
//                   "distributionDate": "2024-01-13T16:00:01.081+01:00",
//                   "distributionRefDate": "2024-01-13T15:44:23.97+01:00",
//                   "values": [
//                       {
//                           "outcome": "1",
//                           "odds": {
//                               "odds": null,
//                               "favouriteOdds": null,
//                               "startOdds": "2,05"
//                           },
//                           "distribution": {
//                               "distribution": "52",
//                               "refDistribution": "52"
//                           }
//                       },
//                       {
//                           "outcome": "X",
//                           "odds": {
//                               "odds": null,
//                               "favouriteOdds": null,
//                               "startOdds": "3,38"
//                           },
//                           "distribution": {
//                               "distribution": "25",
//                               "refDistribution": "25"
//                           }
//                       },
//                       {
//                           "outcome": "2",
//                           "odds": {
//                               "odds": null,
//                               "favouriteOdds": null,
//                               "startOdds": "3,50"
//                           },
//                           "distribution": {
//                               "distribution": "23",
//                               "refDistribution": "23"
//                           }
//                       }
//                   ]
//               },
//               "complementaryBetMetrics": [],
//               "outcomes": null,
//               "svenskaFolket": {
//                   "one": "52",
//                   "x": "25",
//                   "two": "23",
//                   "date": "2024-01-13T16:00:01.081+01:00",
//                   "refOne": "52",
//                   "refX": "25",
//                   "refTwo": "23",
//                   "refDate": "2024-01-13T15:44:23.97+01:00"
//               },
//               "tioTidningarsTips": {
//                   "one": 8,
//                   "x": 2,
//                   "two": 0
//               },
//               "providerIds": [
//                   {
//                       "provider": "BetRadar",
//                       "type": "Normal",
//                       "id": "41888241"
//                   }
//               ]
//           },
//           {
//               "cancelled": false,
//               "eventComment": "",
//               "eventDescription": "Birmingha - Swansea",
//               "extraInfo": null,
//               "eventNumber": 3,
//               "eventTypeId": 1,
//               "participantType": "Team",
//               "match": {
//                   "matchId": 29479,
//                   "matchStart": "2024-01-13T16:00:00+01:00",
//                   "status": "Slut",
//                   "statusId": 31,
//                   "sportEventStatus": "Ended",
//                   "statusTime": "2024-01-13T18:00:06+01:00",
//                   "coverage": 0,
//                   "participants": [
//                       {
//                           "id": 93,
//                           "type": "home",
//                           "name": "Birmingham",
//                           "trend": 0,
//                           "goalAvg": null,
//                           "result": "2",
//                           "shortName": "BIR",
//                           "mediumName": "Birmingha",
//                           "countryId": 2,
//                           "countryName": "England",
//                           "isoCode": "ENG",
//                           "managerId": 0,
//                           "arenaId": 0
//                       },
//                       {
//                           "id": 34,
//                           "type": "away",
//                           "name": "Swansea",
//                           "trend": 0,
//                           "goalAvg": null,
//                           "result": "2",
//                           "shortName": "SWA",
//                           "mediumName": "Swansea",
//                           "countryId": 2,
//                           "countryName": "England",
//                           "isoCode": "ENG",
//                           "managerId": 0,
//                           "arenaId": 0
//                       }
//                   ],
//                   "league": {
//                       "id": 6,
//                       "uniqueLeagueId": 0,
//                       "name": "Championship",
//                       "shortName": null,
//                       "country": {
//                           "id": 2,
//                           "name": "England",
//                           "isoCode": "ENG",
//                           "population": 0
//                       },
//                       "code": null,
//                       "printAbbreviation": null,
//                       "season": null,
//                       "doShow": false,
//                       "isHome": false,
//                       "legacyKey": 0,
//                       "numTeams": 0,
//                       "popular": false,
//                       "rank": 0
//                   },
//                   "leagueTable": null,
//                   "result": [
//                       {
//                           "type": 9,
//                           "sportEventResultType": "Current",
//                           "description": "Current",
//                           "home": "2",
//                           "away": "2",
//                           "homePeriod": null,
//                           "awayPeriod": null
//                       },
//                       {
//                           "type": 1,
//                           "sportEventResultType": "Halftime",
//                           "description": "Mid time",
//                           "home": "1",
//                           "away": "1",
//                           "homePeriod": null,
//                           "awayPeriod": null
//                       },
//                       {
//                           "type": 6,
//                           "sportEventResultType": "Period2",
//                           "description": "Period 2",
//                           "home": "1",
//                           "away": "1",
//                           "homePeriod": null,
//                           "awayPeriod": null
//                       },
//                       {
//                           "type": 2,
//                           "sportEventResultType": "Fulltime",
//                           "description": "Full time",
//                           "home": "2",
//                           "away": "2",
//                           "homePeriod": null,
//                           "awayPeriod": null
//                       }
//                   ],
//                   "media": null,
//                   "mutuals": null
//               },
//               "odds": null,
//               "favouriteOdds": null,
//               "startOdds": {
//                   "one": "2,27",
//                   "x": "3,42",
//                   "two": "2,97"
//               },
//               "betMetrics": {
//                   "eventTypeId": 1,
//                   "eventType": "1X2",
//                   "eventSubTypeId": 2,
//                   "eventSubType": "Fulltid",
//                   "distributionDate": "2024-01-13T16:00:01.081+01:00",
//                   "distributionRefDate": "2024-01-13T15:44:23.97+01:00",
//                   "values": [
//                       {
//                           "outcome": "1",
//                           "odds": {
//                               "odds": null,
//                               "favouriteOdds": null,
//                               "startOdds": "2,27"
//                           },
//                           "distribution": {
//                               "distribution": "48",
//                               "refDistribution": "49"
//                           }
//                       },
//                       {
//                           "outcome": "X",
//                           "odds": {
//                               "odds": null,
//                               "favouriteOdds": null,
//                               "startOdds": "3,42"
//                           },
//                           "distribution": {
//                               "distribution": "28",
//                               "refDistribution": "28"
//                           }
//                       },
//                       {
//                           "outcome": "2",
//                           "odds": {
//                               "odds": null,
//                               "favouriteOdds": null,
//                               "startOdds": "2,97"
//                           },
//                           "distribution": {
//                               "distribution": "24",
//                               "refDistribution": "23"
//                           }
//                       }
//                   ]
//               },
//               "complementaryBetMetrics": [],
//               "outcomes": null,
//               "svenskaFolket": {
//                   "one": "48",
//                   "x": "28",
//                   "two": "24",
//                   "date": "2024-01-13T16:00:01.081+01:00",
//                   "refOne": "49",
//                   "refX": "28",
//                   "refTwo": "23",
//                   "refDate": "2024-01-13T15:44:23.97+01:00"
//               },
//               "tioTidningarsTips": {
//                   "one": 9,
//                   "x": 0,
//                   "two": 1
//               },
//               "providerIds": [
//                   {
//                       "provider": "BetRadar",
//                       "type": "Normal",
//                       "id": "41888231"
//                   }
//               ]
//           },
//           {
//               "cancelled": false,
//               "eventComment": "",
//               "eventDescription": "Cardiff - Leeds",
//               "extraInfo": null,
//               "eventNumber": 4,
//               "eventTypeId": 1,
//               "participantType": "Team",
//               "match": {
//                   "matchId": 29471,
//                   "matchStart": "2024-01-13T16:00:00+01:00",
//                   "status": "Slut",
//                   "statusId": 31,
//                   "sportEventStatus": "Ended",
//                   "statusTime": "2024-01-13T17:56:49+01:00",
//                   "coverage": 0,
//                   "participants": [
//                       {
//                           "id": 90,
//                           "type": "home",
//                           "name": "Cardiff",
//                           "trend": 0,
//                           "goalAvg": null,
//                           "result": "0",
//                           "shortName": "CAR",
//                           "mediumName": "Cardiff",
//                           "countryId": 2,
//                           "countryName": "England",
//                           "isoCode": "ENG",
//                           "managerId": 0,
//                           "arenaId": 0
//                       },
//                       {
//                           "id": 82,
//                           "type": "away",
//                           "name": "Leeds",
//                           "trend": 0,
//                           "goalAvg": null,
//                           "result": "3",
//                           "shortName": "LU",
//                           "mediumName": "Leeds",
//                           "countryId": 2,
//                           "countryName": "England",
//                           "isoCode": "ENG",
//                           "managerId": 0,
//                           "arenaId": 0
//                       }
//                   ],
//                   "league": {
//                       "id": 6,
//                       "uniqueLeagueId": 0,
//                       "name": "Championship",
//                       "shortName": null,
//                       "country": {
//                           "id": 2,
//                           "name": "England",
//                           "isoCode": "ENG",
//                           "population": 0
//                       },
//                       "code": null,
//                       "printAbbreviation": null,
//                       "season": null,
//                       "doShow": false,
//                       "isHome": false,
//                       "legacyKey": 0,
//                       "numTeams": 0,
//                       "popular": false,
//                       "rank": 0
//                   },
//                   "leagueTable": null,
//                   "result": [
//                       {
//                           "type": 9,
//                           "sportEventResultType": "Current",
//                           "description": "Current",
//                           "home": "0",
//                           "away": "3",
//                           "homePeriod": null,
//                           "awayPeriod": null
//                       },
//                       {
//                           "type": 1,
//                           "sportEventResultType": "Halftime",
//                           "description": "Mid time",
//                           "home": "0",
//                           "away": "2",
//                           "homePeriod": null,
//                           "awayPeriod": null
//                       },
//                       {
//                           "type": 6,
//                           "sportEventResultType": "Period2",
//                           "description": "Period 2",
//                           "home": "0",
//                           "away": "1",
//                           "homePeriod": null,
//                           "awayPeriod": null
//                       },
//                       {
//                           "type": 2,
//                           "sportEventResultType": "Fulltime",
//                           "description": "Full time",
//                           "home": "0",
//                           "away": "3",
//                           "homePeriod": null,
//                           "awayPeriod": null
//                       }
//                   ],
//                   "media": null,
//                   "mutuals": null
//               },
//               "odds": null,
//               "favouriteOdds": null,
//               "startOdds": {
//                   "one": "4,75",
//                   "x": "3,88",
//                   "two": "1,66"
//               },
//               "betMetrics": {
//                   "eventTypeId": 1,
//                   "eventType": "1X2",
//                   "eventSubTypeId": 2,
//                   "eventSubType": "Fulltid",
//                   "distributionDate": "2024-01-13T16:00:01.081+01:00",
//                   "distributionRefDate": "2024-01-13T15:44:23.97+01:00",
//                   "values": [
//                       {
//                           "outcome": "1",
//                           "odds": {
//                               "odds": null,
//                               "favouriteOdds": null,
//                               "startOdds": "4,75"
//                           },
//                           "distribution": {
//                               "distribution": "14",
//                               "refDistribution": "14"
//                           }
//                       },
//                       {
//                           "outcome": "X",
//                           "odds": {
//                               "odds": null,
//                               "favouriteOdds": null,
//                               "startOdds": "3,88"
//                           },
//                           "distribution": {
//                               "distribution": "20",
//                               "refDistribution": "20"
//                           }
//                       },
//                       {
//                           "outcome": "2",
//                           "odds": {
//                               "odds": null,
//                               "favouriteOdds": null,
//                               "startOdds": "1,66"
//                           },
//                           "distribution": {
//                               "distribution": "66",
//                               "refDistribution": "66"
//                           }
//                       }
//                   ]
//               },
//               "complementaryBetMetrics": [],
//               "outcomes": null,
//               "svenskaFolket": {
//                   "one": "14",
//                   "x": "20",
//                   "two": "66",
//                   "date": "2024-01-13T16:00:01.081+01:00",
//                   "refOne": "14",
//                   "refX": "20",
//                   "refTwo": "66",
//                   "refDate": "2024-01-13T15:44:23.97+01:00"
//               },
//               "tioTidningarsTips": {
//                   "one": 0,
//                   "x": 0,
//                   "two": 10
//               },
//               "providerIds": [
//                   {
//                       "provider": "BetRadar",
//                       "type": "Normal",
//                       "id": "41888233"
//                   }
//               ]
//           },
//           {
//               "cancelled": false,
//               "eventComment": "",
//               "eventDescription": "Huddersfi - Plymouth",
//               "extraInfo": null,
//               "eventNumber": 5,
//               "eventTypeId": 1,
//               "participantType": "Team",
//               "match": {
//                   "matchId": 29478,
//                   "matchStart": "2024-01-13T16:00:00+01:00",
//                   "status": "Slut",
//                   "statusId": 31,
//                   "sportEventStatus": "Ended",
//                   "statusTime": "2024-01-13T17:55:14+01:00",
//                   "coverage": 0,
//                   "participants": [
//                       {
//                           "id": 94,
//                           "type": "home",
//                           "name": "Huddersfield",
//                           "trend": 0,
//                           "goalAvg": null,
//                           "result": "1",
//                           "shortName": "HUD",
//                           "mediumName": "Huddersfi",
//                           "countryId": 2,
//                           "countryName": "England",
//                           "isoCode": "ENG",
//                           "managerId": 0,
//                           "arenaId": 0
//                       },
//                       {
//                           "id": 126,
//                           "type": "away",
//                           "name": "Plymouth",
//                           "trend": 0,
//                           "goalAvg": null,
//                           "result": "1",
//                           "shortName": "PA",
//                           "mediumName": "Plymouth",
//                           "countryId": 2,
//                           "countryName": "England",
//                           "isoCode": "ENG",
//                           "managerId": 0,
//                           "arenaId": 0
//                       }
//                   ],
//                   "league": {
//                       "id": 6,
//                       "uniqueLeagueId": 0,
//                       "name": "Championship",
//                       "shortName": null,
//                       "country": {
//                           "id": 2,
//                           "name": "England",
//                           "isoCode": "ENG",
//                           "population": 0
//                       },
//                       "code": null,
//                       "printAbbreviation": null,
//                       "season": null,
//                       "doShow": false,
//                       "isHome": false,
//                       "legacyKey": 0,
//                       "numTeams": 0,
//                       "popular": false,
//                       "rank": 0
//                   },
//                   "leagueTable": null,
//                   "result": [
//                       {
//                           "type": 9,
//                           "sportEventResultType": "Current",
//                           "description": "Current",
//                           "home": "1",
//                           "away": "1",
//                           "homePeriod": null,
//                           "awayPeriod": null
//                       },
//                       {
//                           "type": 1,
//                           "sportEventResultType": "Halftime",
//                           "description": "Mid time",
//                           "home": "1",
//                           "away": "1",
//                           "homePeriod": null,
//                           "awayPeriod": null
//                       },
//                       {
//                           "type": 6,
//                           "sportEventResultType": "Period2",
//                           "description": "Period 2",
//                           "home": "0",
//                           "away": "0",
//                           "homePeriod": null,
//                           "awayPeriod": null
//                       },
//                       {
//                           "type": 2,
//                           "sportEventResultType": "Fulltime",
//                           "description": "Full time",
//                           "home": "1",
//                           "away": "1",
//                           "homePeriod": null,
//                           "awayPeriod": null
//                       }
//                   ],
//                   "media": null,
//                   "mutuals": null
//               },
//               "odds": null,
//               "favouriteOdds": null,
//               "startOdds": {
//                   "one": "2,49",
//                   "x": "3,52",
//                   "two": "2,60"
//               },
//               "betMetrics": {
//                   "eventTypeId": 1,
//                   "eventType": "1X2",
//                   "eventSubTypeId": 2,
//                   "eventSubType": "Fulltid",
//                   "distributionDate": "2024-01-13T16:00:01.081+01:00",
//                   "distributionRefDate": "2024-01-13T15:44:23.97+01:00",
//                   "values": [
//                       {
//                           "outcome": "1",
//                           "odds": {
//                               "odds": null,
//                               "favouriteOdds": null,
//                               "startOdds": "2,49"
//                           },
//                           "distribution": {
//                               "distribution": "45",
//                               "refDistribution": "45"
//                           }
//                       },
//                       {
//                           "outcome": "X",
//                           "odds": {
//                               "odds": null,
//                               "favouriteOdds": null,
//                               "startOdds": "3,52"
//                           },
//                           "distribution": {
//                               "distribution": "26",
//                               "refDistribution": "26"
//                           }
//                       },
//                       {
//                           "outcome": "2",
//                           "odds": {
//                               "odds": null,
//                               "favouriteOdds": null,
//                               "startOdds": "2,60"
//                           },
//                           "distribution": {
//                               "distribution": "29",
//                               "refDistribution": "29"
//                           }
//                       }
//                   ]
//               },
//               "complementaryBetMetrics": [],
//               "outcomes": null,
//               "svenskaFolket": {
//                   "one": "45",
//                   "x": "26",
//                   "two": "29",
//                   "date": "2024-01-13T16:00:01.081+01:00",
//                   "refOne": "45",
//                   "refX": "26",
//                   "refTwo": "29",
//                   "refDate": "2024-01-13T15:44:23.97+01:00"
//               },
//               "tioTidningarsTips": {
//                   "one": 8,
//                   "x": 0,
//                   "two": 2
//               },
//               "providerIds": [
//                   {
//                       "provider": "BetRadar",
//                       "type": "Normal",
//                       "id": "41888237"
//                   }
//               ]
//           },
//           {
//               "cancelled": false,
//               "eventComment": "",
//               "eventDescription": "Millwall - Middlesbr",
//               "extraInfo": null,
//               "eventNumber": 6,
//               "eventTypeId": 1,
//               "participantType": "Team",
//               "match": {
//                   "matchId": 29476,
//                   "matchStart": "2024-01-13T16:00:00+01:00",
//                   "status": "Slut",
//                   "statusId": 31,
//                   "sportEventStatus": "Ended",
//                   "statusTime": "2024-01-13T18:10:09+01:00",
//                   "coverage": 0,
//                   "participants": [
//                       {
//                           "id": 33,
//                           "type": "home",
//                           "name": "Millwall",
//                           "trend": 0,
//                           "goalAvg": null,
//                           "result": "1",
//                           "shortName": "MIL",
//                           "mediumName": "Millwall",
//                           "countryId": 2,
//                           "countryName": "England",
//                           "isoCode": "ENG",
//                           "managerId": 0,
//                           "arenaId": 0
//                       },
//                       {
//                           "id": 67,
//                           "type": "away",
//                           "name": "Middlesbrough",
//                           "trend": 0,
//                           "goalAvg": null,
//                           "result": "3",
//                           "shortName": "MID",
//                           "mediumName": "Middlesbr",
//                           "countryId": 2,
//                           "countryName": "England",
//                           "isoCode": "ENG",
//                           "managerId": 0,
//                           "arenaId": 0
//                       }
//                   ],
//                   "league": {
//                       "id": 6,
//                       "uniqueLeagueId": 0,
//                       "name": "Championship",
//                       "shortName": null,
//                       "country": {
//                           "id": 2,
//                           "name": "England",
//                           "isoCode": "ENG",
//                           "population": 0
//                       },
//                       "code": null,
//                       "printAbbreviation": null,
//                       "season": null,
//                       "doShow": false,
//                       "isHome": false,
//                       "legacyKey": 0,
//                       "numTeams": 0,
//                       "popular": false,
//                       "rank": 0
//                   },
//                   "leagueTable": null,
//                   "result": [
//                       {
//                           "type": 9,
//                           "sportEventResultType": "Current",
//                           "description": "Current",
//                           "home": "1",
//                           "away": "3",
//                           "homePeriod": null,
//                           "awayPeriod": null
//                       },
//                       {
//                           "type": 1,
//                           "sportEventResultType": "Halftime",
//                           "description": "Mid time",
//                           "home": "1",
//                           "away": "1",
//                           "homePeriod": null,
//                           "awayPeriod": null
//                       },
//                       {
//                           "type": 6,
//                           "sportEventResultType": "Period2",
//                           "description": "Period 2",
//                           "home": "0",
//                           "away": "2",
//                           "homePeriod": null,
//                           "awayPeriod": null
//                       },
//                       {
//                           "type": 2,
//                           "sportEventResultType": "Fulltime",
//                           "description": "Full time",
//                           "home": "1",
//                           "away": "3",
//                           "homePeriod": null,
//                           "awayPeriod": null
//                       }
//                   ],
//                   "media": null,
//                   "mutuals": null
//               },
//               "odds": null,
//               "favouriteOdds": null,
//               "startOdds": {
//                   "one": "2,81",
//                   "x": "3,28",
//                   "two": "2,45"
//               },
//               "betMetrics": {
//                   "eventTypeId": 1,
//                   "eventType": "1X2",
//                   "eventSubTypeId": 2,
//                   "eventSubType": "Fulltid",
//                   "distributionDate": "2024-01-13T16:00:01.081+01:00",
//                   "distributionRefDate": "2024-01-13T15:44:23.97+01:00",
//                   "values": [
//                       {
//                           "outcome": "1",
//                           "odds": {
//                               "odds": null,
//                               "favouriteOdds": null,
//                               "startOdds": "2,81"
//                           },
//                           "distribution": {
//                               "distribution": "37",
//                               "refDistribution": "39"
//                           }
//                       },
//                       {
//                           "outcome": "X",
//                           "odds": {
//                               "odds": null,
//                               "favouriteOdds": null,
//                               "startOdds": "3,28"
//                           },
//                           "distribution": {
//                               "distribution": "26",
//                               "refDistribution": "26"
//                           }
//                       },
//                       {
//                           "outcome": "2",
//                           "odds": {
//                               "odds": null,
//                               "favouriteOdds": null,
//                               "startOdds": "2,45"
//                           },
//                           "distribution": {
//                               "distribution": "37",
//                               "refDistribution": "35"
//                           }
//                       }
//                   ]
//               },
//               "complementaryBetMetrics": [],
//               "outcomes": null,
//               "svenskaFolket": {
//                   "one": "37",
//                   "x": "26",
//                   "two": "37",
//                   "date": "2024-01-13T16:00:01.081+01:00",
//                   "refOne": "39",
//                   "refX": "26",
//                   "refTwo": "35",
//                   "refDate": "2024-01-13T15:44:23.97+01:00"
//               },
//               "tioTidningarsTips": {
//                   "one": 4,
//                   "x": 2,
//                   "two": 4
//               },
//               "providerIds": [
//                   {
//                       "provider": "BetRadar",
//                       "type": "Normal",
//                       "id": "41888243"
//                   }
//               ]
//           },
//           {
//               "cancelled": false,
//               "eventComment": "",
//               "eventDescription": "Preston - Bristol C",
//               "extraInfo": null,
//               "eventNumber": 7,
//               "eventTypeId": 1,
//               "participantType": "Team",
//               "match": {
//                   "matchId": 29480,
//                   "matchStart": "2024-01-13T16:00:00+01:00",
//                   "status": "Slut",
//                   "statusId": 31,
//                   "sportEventStatus": "Ended",
//                   "statusTime": "2024-01-13T17:54:00+01:00",
//                   "coverage": 0,
//                   "participants": [
//                       {
//                           "id": 37,
//                           "type": "home",
//                           "name": "Preston",
//                           "trend": 0,
//                           "goalAvg": null,
//                           "result": "2",
//                           "shortName": "PRE",
//                           "mediumName": "Preston",
//                           "countryId": 2,
//                           "countryName": "England",
//                           "isoCode": "ENG",
//                           "managerId": 0,
//                           "arenaId": 0
//                       },
//                       {
//                           "id": 96,
//                           "type": "away",
//                           "name": "Bristol City",
//                           "trend": 0,
//                           "goalAvg": null,
//                           "result": "0",
//                           "shortName": "BRC",
//                           "mediumName": "Bristol C",
//                           "countryId": 2,
//                           "countryName": "England",
//                           "isoCode": "ENG",
//                           "managerId": 0,
//                           "arenaId": 0
//                       }
//                   ],
//                   "league": {
//                       "id": 6,
//                       "uniqueLeagueId": 0,
//                       "name": "Championship",
//                       "shortName": null,
//                       "country": {
//                           "id": 2,
//                           "name": "England",
//                           "isoCode": "ENG",
//                           "population": 0
//                       },
//                       "code": null,
//                       "printAbbreviation": null,
//                       "season": null,
//                       "doShow": false,
//                       "isHome": false,
//                       "legacyKey": 0,
//                       "numTeams": 0,
//                       "popular": false,
//                       "rank": 0
//                   },
//                   "leagueTable": null,
//                   "result": [
//                       {
//                           "type": 9,
//                           "sportEventResultType": "Current",
//                           "description": "Current",
//                           "home": "2",
//                           "away": "0",
//                           "homePeriod": null,
//                           "awayPeriod": null
//                       },
//                       {
//                           "type": 1,
//                           "sportEventResultType": "Halftime",
//                           "description": "Mid time",
//                           "home": "0",
//                           "away": "0",
//                           "homePeriod": null,
//                           "awayPeriod": null
//                       },
//                       {
//                           "type": 6,
//                           "sportEventResultType": "Period2",
//                           "description": "Period 2",
//                           "home": "2",
//                           "away": "0",
//                           "homePeriod": null,
//                           "awayPeriod": null
//                       },
//                       {
//                           "type": 2,
//                           "sportEventResultType": "Fulltime",
//                           "description": "Full time",
//                           "home": "2",
//                           "away": "0",
//                           "homePeriod": null,
//                           "awayPeriod": null
//                       }
//                   ],
//                   "media": null,
//                   "mutuals": null
//               },
//               "odds": null,
//               "favouriteOdds": null,
//               "startOdds": {
//                   "one": "2,60",
//                   "x": "3,10",
//                   "two": "2,77"
//               },
//               "betMetrics": {
//                   "eventTypeId": 1,
//                   "eventType": "1X2",
//                   "eventSubTypeId": 2,
//                   "eventSubType": "Fulltid",
//                   "distributionDate": "2024-01-13T16:00:01.081+01:00",
//                   "distributionRefDate": "2024-01-13T15:44:23.97+01:00",
//                   "values": [
//                       {
//                           "outcome": "1",
//                           "odds": {
//                               "odds": null,
//                               "favouriteOdds": null,
//                               "startOdds": "2,60"
//                           },
//                           "distribution": {
//                               "distribution": "33",
//                               "refDistribution": "33"
//                           }
//                       },
//                       {
//                           "outcome": "X",
//                           "odds": {
//                               "odds": null,
//                               "favouriteOdds": null,
//                               "startOdds": "3,10"
//                           },
//                           "distribution": {
//                               "distribution": "32",
//                               "refDistribution": "32"
//                           }
//                       },
//                       {
//                           "outcome": "2",
//                           "odds": {
//                               "odds": null,
//                               "favouriteOdds": null,
//                               "startOdds": "2,77"
//                           },
//                           "distribution": {
//                               "distribution": "35",
//                               "refDistribution": "35"
//                           }
//                       }
//                   ]
//               },
//               "complementaryBetMetrics": [],
//               "outcomes": null,
//               "svenskaFolket": {
//                   "one": "33",
//                   "x": "32",
//                   "two": "35",
//                   "date": "2024-01-13T16:00:01.081+01:00",
//                   "refOne": "33",
//                   "refX": "32",
//                   "refTwo": "35",
//                   "refDate": "2024-01-13T15:44:23.97+01:00"
//               },
//               "tioTidningarsTips": {
//                   "one": 8,
//                   "x": 0,
//                   "two": 2
//               },
//               "providerIds": [
//                   {
//                       "provider": "BetRadar",
//                       "type": "Normal",
//                       "id": "41888245"
//                   }
//               ]
//           },
//           {
//               "cancelled": false,
//               "eventComment": "",
//               "eventDescription": "Rotherham - Stoke",
//               "extraInfo": null,
//               "eventNumber": 8,
//               "eventTypeId": 1,
//               "participantType": "Team",
//               "match": {
//                   "matchId": 29473,
//                   "matchStart": "2024-01-13T16:00:00+01:00",
//                   "status": "Slut",
//                   "statusId": 31,
//                   "sportEventStatus": "Ended",
//                   "statusTime": "2024-01-13T17:58:10+01:00",
//                   "coverage": 0,
//                   "participants": [
//                       {
//                           "id": 102,
//                           "type": "home",
//                           "name": "Rotherham",
//                           "trend": 0,
//                           "goalAvg": null,
//                           "result": "0",
//                           "shortName": "ROT",
//                           "mediumName": "Rotherham",
//                           "countryId": 2,
//                           "countryName": "England",
//                           "isoCode": "ENG",
//                           "managerId": 0,
//                           "arenaId": 0
//                       },
//                       {
//                           "id": 32,
//                           "type": "away",
//                           "name": "Stoke",
//                           "trend": 0,
//                           "goalAvg": null,
//                           "result": "1",
//                           "shortName": "STO",
//                           "mediumName": "Stoke",
//                           "countryId": 2,
//                           "countryName": "England",
//                           "isoCode": "ENG",
//                           "managerId": 0,
//                           "arenaId": 0
//                       }
//                   ],
//                   "league": {
//                       "id": 6,
//                       "uniqueLeagueId": 0,
//                       "name": "Championship",
//                       "shortName": null,
//                       "country": {
//                           "id": 2,
//                           "name": "England",
//                           "isoCode": "ENG",
//                           "population": 0
//                       },
//                       "code": null,
//                       "printAbbreviation": null,
//                       "season": null,
//                       "doShow": false,
//                       "isHome": false,
//                       "legacyKey": 0,
//                       "numTeams": 0,
//                       "popular": false,
//                       "rank": 0
//                   },
//                   "leagueTable": null,
//                   "result": [
//                       {
//                           "type": 9,
//                           "sportEventResultType": "Current",
//                           "description": "Current",
//                           "home": "0",
//                           "away": "1",
//                           "homePeriod": null,
//                           "awayPeriod": null
//                       },
//                       {
//                           "type": 1,
//                           "sportEventResultType": "Halftime",
//                           "description": "Mid time",
//                           "home": "0",
//                           "away": "1",
//                           "homePeriod": null,
//                           "awayPeriod": null
//                       },
//                       {
//                           "type": 6,
//                           "sportEventResultType": "Period2",
//                           "description": "Period 2",
//                           "home": "0",
//                           "away": "0",
//                           "homePeriod": null,
//                           "awayPeriod": null
//                       },
//                       {
//                           "type": 2,
//                           "sportEventResultType": "Fulltime",
//                           "description": "Full time",
//                           "home": "0",
//                           "away": "1",
//                           "homePeriod": null,
//                           "awayPeriod": null
//                       }
//                   ],
//                   "media": null,
//                   "mutuals": null
//               },
//               "odds": null,
//               "favouriteOdds": null,
//               "startOdds": {
//                   "one": "3,99",
//                   "x": "3,49",
//                   "two": "1,87"
//               },
//               "betMetrics": {
//                   "eventTypeId": 1,
//                   "eventType": "1X2",
//                   "eventSubTypeId": 2,
//                   "eventSubType": "Fulltid",
//                   "distributionDate": "2024-01-13T16:00:01.081+01:00",
//                   "distributionRefDate": "2024-01-13T15:44:23.97+01:00",
//                   "values": [
//                       {
//                           "outcome": "1",
//                           "odds": {
//                               "odds": null,
//                               "favouriteOdds": null,
//                               "startOdds": "3,99"
//                           },
//                           "distribution": {
//                               "distribution": "20",
//                               "refDistribution": "19"
//                           }
//                       },
//                       {
//                           "outcome": "X",
//                           "odds": {
//                               "odds": null,
//                               "favouriteOdds": null,
//                               "startOdds": "3,49"
//                           },
//                           "distribution": {
//                               "distribution": "27",
//                               "refDistribution": "28"
//                           }
//                       },
//                       {
//                           "outcome": "2",
//                           "odds": {
//                               "odds": null,
//                               "favouriteOdds": null,
//                               "startOdds": "1,87"
//                           },
//                           "distribution": {
//                               "distribution": "53",
//                               "refDistribution": "53"
//                           }
//                       }
//                   ]
//               },
//               "complementaryBetMetrics": [],
//               "outcomes": null,
//               "svenskaFolket": {
//                   "one": "20",
//                   "x": "27",
//                   "two": "53",
//                   "date": "2024-01-13T16:00:01.081+01:00",
//                   "refOne": "19",
//                   "refX": "28",
//                   "refTwo": "53",
//                   "refDate": "2024-01-13T15:44:23.97+01:00"
//               },
//               "tioTidningarsTips": {
//                   "one": 2,
//                   "x": 3,
//                   "two": 5
//               },
//               "providerIds": [
//                   {
//                       "provider": "BetRadar",
//                       "type": "Normal",
//                       "id": "41888247"
//                   }
//               ]
//           },
//           {
//               "cancelled": false,
//               "eventComment": "",
//               "eventDescription": "Southampt - Sheff W",
//               "extraInfo": null,
//               "eventNumber": 9,
//               "eventTypeId": 1,
//               "participantType": "Team",
//               "match": {
//                   "matchId": 29475,
//                   "matchStart": "2024-01-13T16:00:00+01:00",
//                   "status": "Slut",
//                   "statusId": 31,
//                   "sportEventStatus": "Ended",
//                   "statusTime": "2024-01-13T17:56:05+01:00",
//                   "coverage": 0,
//                   "participants": [
//                       {
//                           "id": 81,
//                           "type": "home",
//                           "name": "Southampton",
//                           "trend": 0,
//                           "goalAvg": null,
//                           "result": "4",
//                           "shortName": "SOU",
//                           "mediumName": "Southampt",
//                           "countryId": 2,
//                           "countryName": "England",
//                           "isoCode": "ENG",
//                           "managerId": 0,
//                           "arenaId": 0
//                       },
//                       {
//                           "id": 100,
//                           "type": "away",
//                           "name": "Sheffield W",
//                           "trend": 0,
//                           "goalAvg": null,
//                           "result": "0",
//                           "shortName": "SHW",
//                           "mediumName": "Sheff W",
//                           "countryId": 2,
//                           "countryName": "England",
//                           "isoCode": "ENG",
//                           "managerId": 0,
//                           "arenaId": 0
//                       }
//                   ],
//                   "league": {
//                       "id": 6,
//                       "uniqueLeagueId": 0,
//                       "name": "Championship",
//                       "shortName": null,
//                       "country": {
//                           "id": 2,
//                           "name": "England",
//                           "isoCode": "ENG",
//                           "population": 0
//                       },
//                       "code": null,
//                       "printAbbreviation": null,
//                       "season": null,
//                       "doShow": false,
//                       "isHome": false,
//                       "legacyKey": 0,
//                       "numTeams": 0,
//                       "popular": false,
//                       "rank": 0
//                   },
//                   "leagueTable": null,
//                   "result": [
//                       {
//                           "type": 9,
//                           "sportEventResultType": "Current",
//                           "description": "Current",
//                           "home": "4",
//                           "away": "0",
//                           "homePeriod": null,
//                           "awayPeriod": null
//                       },
//                       {
//                           "type": 1,
//                           "sportEventResultType": "Halftime",
//                           "description": "Mid time",
//                           "home": "1",
//                           "away": "0",
//                           "homePeriod": null,
//                           "awayPeriod": null
//                       },
//                       {
//                           "type": 6,
//                           "sportEventResultType": "Period2",
//                           "description": "Period 2",
//                           "home": "3",
//                           "away": "0",
//                           "homePeriod": null,
//                           "awayPeriod": null
//                       },
//                       {
//                           "type": 2,
//                           "sportEventResultType": "Fulltime",
//                           "description": "Full time",
//                           "home": "4",
//                           "away": "0",
//                           "homePeriod": null,
//                           "awayPeriod": null
//                       }
//                   ],
//                   "media": null,
//                   "mutuals": null
//               },
//               "odds": null,
//               "favouriteOdds": null,
//               "startOdds": {
//                   "one": "1,40",
//                   "x": "4,55",
//                   "two": "7,05"
//               },
//               "betMetrics": {
//                   "eventTypeId": 1,
//                   "eventType": "1X2",
//                   "eventSubTypeId": 2,
//                   "eventSubType": "Fulltid",
//                   "distributionDate": "2024-01-13T16:00:01.081+01:00",
//                   "distributionRefDate": "2024-01-13T15:44:23.97+01:00",
//                   "values": [
//                       {
//                           "outcome": "1",
//                           "odds": {
//                               "odds": null,
//                               "favouriteOdds": null,
//                               "startOdds": "1,40"
//                           },
//                           "distribution": {
//                               "distribution": "81",
//                               "refDistribution": "82"
//                           }
//                       },
//                       {
//                           "outcome": "X",
//                           "odds": {
//                               "odds": null,
//                               "favouriteOdds": null,
//                               "startOdds": "4,55"
//                           },
//                           "distribution": {
//                               "distribution": "12",
//                               "refDistribution": "12"
//                           }
//                       },
//                       {
//                           "outcome": "2",
//                           "odds": {
//                               "odds": null,
//                               "favouriteOdds": null,
//                               "startOdds": "7,05"
//                           },
//                           "distribution": {
//                               "distribution": "7",
//                               "refDistribution": "6"
//                           }
//                       }
//                   ]
//               },
//               "complementaryBetMetrics": [],
//               "outcomes": null,
//               "svenskaFolket": {
//                   "one": "81",
//                   "x": "12",
//                   "two": "7",
//                   "date": "2024-01-13T16:00:01.081+01:00",
//                   "refOne": "82",
//                   "refX": "12",
//                   "refTwo": "6",
//                   "refDate": "2024-01-13T15:44:23.97+01:00"
//               },
//               "tioTidningarsTips": {
//                   "one": 10,
//                   "x": 0,
//                   "two": 0
//               },
//               "providerIds": [
//                   {
//                       "provider": "BetRadar",
//                       "type": "Normal",
//                       "id": "41888249"
//                   }
//               ]
//           },
//           {
//               "cancelled": false,
//               "eventComment": "",
//               "eventDescription": "West Brom - Blackburn",
//               "extraInfo": null,
//               "eventNumber": 10,
//               "eventTypeId": 1,
//               "participantType": "Team",
//               "match": {
//                   "matchId": 29474,
//                   "matchStart": "2024-01-13T16:00:00+01:00",
//                   "status": "Slut",
//                   "statusId": 31,
//                   "sportEventStatus": "Ended",
//                   "statusTime": "2024-01-13T17:59:50+01:00",
//                   "coverage": 0,
//                   "participants": [
//                       {
//                           "id": 63,
//                           "type": "home",
//                           "name": "West Bromwich",
//                           "trend": 0,
//                           "goalAvg": null,
//                           "result": "4",
//                           "shortName": "WBA",
//                           "mediumName": "West Brom",
//                           "countryId": 2,
//                           "countryName": "England",
//                           "isoCode": "ENG",
//                           "managerId": 0,
//                           "arenaId": 0
//                       },
//                       {
//                           "id": 91,
//                           "type": "away",
//                           "name": "Blackburn",
//                           "trend": 0,
//                           "goalAvg": null,
//                           "result": "1",
//                           "shortName": "BLA",
//                           "mediumName": "Blackburn",
//                           "countryId": 2,
//                           "countryName": "England",
//                           "isoCode": "ENG",
//                           "managerId": 0,
//                           "arenaId": 0
//                       }
//                   ],
//                   "league": {
//                       "id": 6,
//                       "uniqueLeagueId": 0,
//                       "name": "Championship",
//                       "shortName": null,
//                       "country": {
//                           "id": 2,
//                           "name": "England",
//                           "isoCode": "ENG",
//                           "population": 0
//                       },
//                       "code": null,
//                       "printAbbreviation": null,
//                       "season": null,
//                       "doShow": false,
//                       "isHome": false,
//                       "legacyKey": 0,
//                       "numTeams": 0,
//                       "popular": false,
//                       "rank": 0
//                   },
//                   "leagueTable": null,
//                   "result": [
//                       {
//                           "type": 9,
//                           "sportEventResultType": "Current",
//                           "description": "Current",
//                           "home": "4",
//                           "away": "1",
//                           "homePeriod": null,
//                           "awayPeriod": null
//                       },
//                       {
//                           "type": 1,
//                           "sportEventResultType": "Halftime",
//                           "description": "Mid time",
//                           "home": "3",
//                           "away": "0",
//                           "homePeriod": null,
//                           "awayPeriod": null
//                       },
//                       {
//                           "type": 6,
//                           "sportEventResultType": "Period2",
//                           "description": "Period 2",
//                           "home": "1",
//                           "away": "1",
//                           "homePeriod": null,
//                           "awayPeriod": null
//                       },
//                       {
//                           "type": 2,
//                           "sportEventResultType": "Fulltime",
//                           "description": "Full time",
//                           "home": "4",
//                           "away": "1",
//                           "homePeriod": null,
//                           "awayPeriod": null
//                       }
//                   ],
//                   "media": null,
//                   "mutuals": null
//               },
//               "odds": null,
//               "favouriteOdds": null,
//               "startOdds": {
//                   "one": "1,68",
//                   "x": "3,84",
//                   "two": "4,65"
//               },
//               "betMetrics": {
//                   "eventTypeId": 1,
//                   "eventType": "1X2",
//                   "eventSubTypeId": 2,
//                   "eventSubType": "Fulltid",
//                   "distributionDate": "2024-01-13T16:00:01.081+01:00",
//                   "distributionRefDate": "2024-01-13T15:44:23.97+01:00",
//                   "values": [
//                       {
//                           "outcome": "1",
//                           "odds": {
//                               "odds": null,
//                               "favouriteOdds": null,
//                               "startOdds": "1,68"
//                           },
//                           "distribution": {
//                               "distribution": "64",
//                               "refDistribution": "66"
//                           }
//                       },
//                       {
//                           "outcome": "X",
//                           "odds": {
//                               "odds": null,
//                               "favouriteOdds": null,
//                               "startOdds": "3,84"
//                           },
//                           "distribution": {
//                               "distribution": "20",
//                               "refDistribution": "19"
//                           }
//                       },
//                       {
//                           "outcome": "2",
//                           "odds": {
//                               "odds": null,
//                               "favouriteOdds": null,
//                               "startOdds": "4,65"
//                           },
//                           "distribution": {
//                               "distribution": "16",
//                               "refDistribution": "15"
//                           }
//                       }
//                   ]
//               },
//               "complementaryBetMetrics": [],
//               "outcomes": null,
//               "svenskaFolket": {
//                   "one": "64",
//                   "x": "20",
//                   "two": "16",
//                   "date": "2024-01-13T16:00:01.081+01:00",
//                   "refOne": "66",
//                   "refX": "19",
//                   "refTwo": "15",
//                   "refDate": "2024-01-13T15:44:23.97+01:00"
//               },
//               "tioTidningarsTips": {
//                   "one": 10,
//                   "x": 0,
//                   "two": 0
//               },
//               "providerIds": [
//                   {
//                       "provider": "BetRadar",
//                       "type": "Normal",
//                       "id": "41888229"
//                   }
//               ]
//           },
//           {
//               "cancelled": false,
//               "eventComment": "",
//               "eventDescription": "Charlton - Peterboro",
//               "extraInfo": null,
//               "eventNumber": 11,
//               "eventTypeId": 1,
//               "participantType": "Team",
//               "match": {
//                   "matchId": 29490,
//                   "matchStart": "2024-01-13T16:00:00+01:00",
//                   "status": "Slut",
//                   "statusId": 31,
//                   "sportEventStatus": "Ended",
//                   "statusTime": "2024-01-13T18:00:46+01:00",
//                   "coverage": 0,
//                   "participants": [
//                       {
//                           "id": 103,
//                           "type": "home",
//                           "name": "Charlton",
//                           "trend": 0,
//                           "goalAvg": null,
//                           "result": "1",
//                           "shortName": "CHA",
//                           "mediumName": "Charlton",
//                           "countryId": 2,
//                           "countryName": "England",
//                           "isoCode": "ENG",
//                           "managerId": 0,
//                           "arenaId": 0
//                       },
//                       {
//                           "id": 35,
//                           "type": "away",
//                           "name": "Peterborough ",
//                           "trend": 0,
//                           "goalAvg": null,
//                           "result": "2",
//                           "shortName": "PET",
//                           "mediumName": "Peterboro",
//                           "countryId": 2,
//                           "countryName": "England",
//                           "isoCode": "ENG",
//                           "managerId": 0,
//                           "arenaId": 0
//                       }
//                   ],
//                   "league": {
//                       "id": 8,
//                       "uniqueLeagueId": 0,
//                       "name": "League One",
//                       "shortName": null,
//                       "country": {
//                           "id": 2,
//                           "name": "England",
//                           "isoCode": "ENG",
//                           "population": 0
//                       },
//                       "code": null,
//                       "printAbbreviation": null,
//                       "season": null,
//                       "doShow": false,
//                       "isHome": false,
//                       "legacyKey": 0,
//                       "numTeams": 0,
//                       "popular": false,
//                       "rank": 0
//                   },
//                   "leagueTable": null,
//                   "result": [
//                       {
//                           "type": 9,
//                           "sportEventResultType": "Current",
//                           "description": "Current",
//                           "home": "1",
//                           "away": "2",
//                           "homePeriod": null,
//                           "awayPeriod": null
//                       },
//                       {
//                           "type": 1,
//                           "sportEventResultType": "Halftime",
//                           "description": "Mid time",
//                           "home": "0",
//                           "away": "1",
//                           "homePeriod": null,
//                           "awayPeriod": null
//                       },
//                       {
//                           "type": 6,
//                           "sportEventResultType": "Period2",
//                           "description": "Period 2",
//                           "home": "1",
//                           "away": "1",
//                           "homePeriod": null,
//                           "awayPeriod": null
//                       },
//                       {
//                           "type": 2,
//                           "sportEventResultType": "Fulltime",
//                           "description": "Full time",
//                           "home": "1",
//                           "away": "2",
//                           "homePeriod": null,
//                           "awayPeriod": null
//                       }
//                   ],
//                   "media": null,
//                   "mutuals": null
//               },
//               "odds": null,
//               "favouriteOdds": null,
//               "startOdds": {
//                   "one": "2,92",
//                   "x": "3,96",
//                   "two": "1,98"
//               },
//               "betMetrics": {
//                   "eventTypeId": 1,
//                   "eventType": "1X2",
//                   "eventSubTypeId": 2,
//                   "eventSubType": "Fulltid",
//                   "distributionDate": "2024-01-13T16:00:01.081+01:00",
//                   "distributionRefDate": "2024-01-13T15:44:23.97+01:00",
//                   "values": [
//                       {
//                           "outcome": "1",
//                           "odds": {
//                               "odds": null,
//                               "favouriteOdds": null,
//                               "startOdds": "2,92"
//                           },
//                           "distribution": {
//                               "distribution": "19",
//                               "refDistribution": "18"
//                           }
//                       },
//                       {
//                           "outcome": "X",
//                           "odds": {
//                               "odds": null,
//                               "favouriteOdds": null,
//                               "startOdds": "3,96"
//                           },
//                           "distribution": {
//                               "distribution": "23",
//                               "refDistribution": "24"
//                           }
//                       },
//                       {
//                           "outcome": "2",
//                           "odds": {
//                               "odds": null,
//                               "favouriteOdds": null,
//                               "startOdds": "1,98"
//                           },
//                           "distribution": {
//                               "distribution": "58",
//                               "refDistribution": "58"
//                           }
//                       }
//                   ]
//               },
//               "complementaryBetMetrics": [],
//               "outcomes": null,
//               "svenskaFolket": {
//                   "one": "19",
//                   "x": "23",
//                   "two": "58",
//                   "date": "2024-01-13T16:00:01.081+01:00",
//                   "refOne": "18",
//                   "refX": "24",
//                   "refTwo": "58",
//                   "refDate": "2024-01-13T15:44:23.97+01:00"
//               },
//               "tioTidningarsTips": {
//                   "one": 0,
//                   "x": 1,
//                   "two": 9
//               },
//               "providerIds": [
//                   {
//                       "provider": "BetRadar",
//                       "type": "Normal",
//                       "id": "41889435"
//                   }
//               ]
//           },
//           {
//               "cancelled": false,
//               "eventComment": "",
//               "eventDescription": "Northampt - Wigan",
//               "extraInfo": null,
//               "eventNumber": 12,
//               "eventTypeId": 1,
//               "participantType": "Team",
//               "match": {
//                   "matchId": 29488,
//                   "matchStart": "2024-01-13T16:00:00+01:00",
//                   "status": "Slut",
//                   "statusId": 31,
//                   "sportEventStatus": "Ended",
//                   "statusTime": "2024-01-13T17:56:34+01:00",
//                   "coverage": 0,
//                   "participants": [
//                       {
//                           "id": 113,
//                           "type": "home",
//                           "name": "Northampton",
//                           "trend": 0,
//                           "goalAvg": null,
//                           "result": "1",
//                           "shortName": "NOR",
//                           "mediumName": "Northampt",
//                           "countryId": 2,
//                           "countryName": "England",
//                           "isoCode": "ENG",
//                           "managerId": 0,
//                           "arenaId": 0
//                       },
//                       {
//                           "id": 111,
//                           "type": "away",
//                           "name": "Wigan",
//                           "trend": 0,
//                           "goalAvg": null,
//                           "result": "1",
//                           "shortName": "WIG",
//                           "mediumName": "Wigan",
//                           "countryId": 2,
//                           "countryName": "England",
//                           "isoCode": "ENG",
//                           "managerId": 0,
//                           "arenaId": 0
//                       }
//                   ],
//                   "league": {
//                       "id": 8,
//                       "uniqueLeagueId": 0,
//                       "name": "League One",
//                       "shortName": null,
//                       "country": {
//                           "id": 2,
//                           "name": "England",
//                           "isoCode": "ENG",
//                           "population": 0
//                       },
//                       "code": null,
//                       "printAbbreviation": null,
//                       "season": null,
//                       "doShow": false,
//                       "isHome": false,
//                       "legacyKey": 0,
//                       "numTeams": 0,
//                       "popular": false,
//                       "rank": 0
//                   },
//                   "leagueTable": null,
//                   "result": [
//                       {
//                           "type": 9,
//                           "sportEventResultType": "Current",
//                           "description": "Current",
//                           "home": "1",
//                           "away": "1",
//                           "homePeriod": null,
//                           "awayPeriod": null
//                       },
//                       {
//                           "type": 1,
//                           "sportEventResultType": "Halftime",
//                           "description": "Mid time",
//                           "home": "1",
//                           "away": "0",
//                           "homePeriod": null,
//                           "awayPeriod": null
//                       },
//                       {
//                           "type": 6,
//                           "sportEventResultType": "Period2",
//                           "description": "Period 2",
//                           "home": "0",
//                           "away": "1",
//                           "homePeriod": null,
//                           "awayPeriod": null
//                       },
//                       {
//                           "type": 2,
//                           "sportEventResultType": "Fulltime",
//                           "description": "Full time",
//                           "home": "1",
//                           "away": "1",
//                           "homePeriod": null,
//                           "awayPeriod": null
//                       }
//                   ],
//                   "media": null,
//                   "mutuals": null
//               },
//               "odds": null,
//               "favouriteOdds": null,
//               "startOdds": {
//                   "one": "2,26",
//                   "x": "3,31",
//                   "two": "2,83"
//               },
//               "betMetrics": {
//                   "eventTypeId": 1,
//                   "eventType": "1X2",
//                   "eventSubTypeId": 2,
//                   "eventSubType": "Fulltid",
//                   "distributionDate": "2024-01-13T16:00:01.081+01:00",
//                   "distributionRefDate": "2024-01-13T15:44:23.97+01:00",
//                   "values": [
//                       {
//                           "outcome": "1",
//                           "odds": {
//                               "odds": null,
//                               "favouriteOdds": null,
//                               "startOdds": "2,26"
//                           },
//                           "distribution": {
//                               "distribution": "51",
//                               "refDistribution": "53"
//                           }
//                       },
//                       {
//                           "outcome": "X",
//                           "odds": {
//                               "odds": null,
//                               "favouriteOdds": null,
//                               "startOdds": "3,31"
//                           },
//                           "distribution": {
//                               "distribution": "24",
//                               "refDistribution": "22"
//                           }
//                       },
//                       {
//                           "outcome": "2",
//                           "odds": {
//                               "odds": null,
//                               "favouriteOdds": null,
//                               "startOdds": "2,83"
//                           },
//                           "distribution": {
//                               "distribution": "25",
//                               "refDistribution": "25"
//                           }
//                       }
//                   ]
//               },
//               "complementaryBetMetrics": [],
//               "outcomes": null,
//               "svenskaFolket": {
//                   "one": "51",
//                   "x": "24",
//                   "two": "25",
//                   "date": "2024-01-13T16:00:01.081+01:00",
//                   "refOne": "53",
//                   "refX": "22",
//                   "refTwo": "25",
//                   "refDate": "2024-01-13T15:44:23.97+01:00"
//               },
//               "tioTidningarsTips": {
//                   "one": 9,
//                   "x": 0,
//                   "two": 1
//               },
//               "providerIds": [
//                   {
//                       "provider": "BetRadar",
//                       "type": "Normal",
//                       "id": "41889439"
//                   }
//               ]
//           },
//           {
//               "cancelled": false,
//               "eventComment": "",
//               "eventDescription": "Shrewsbur - Stevenage",
//               "extraInfo": null,
//               "eventNumber": 13,
//               "eventTypeId": 1,
//               "participantType": "Team",
//               "match": {
//                   "matchId": 29485,
//                   "matchStart": "2024-01-13T16:00:00+01:00",
//                   "status": "Slut",
//                   "statusId": 31,
//                   "sportEventStatus": "Ended",
//                   "statusTime": "2024-01-13T17:57:13+01:00",
//                   "coverage": 0,
//                   "participants": [
//                       {
//                           "id": 130,
//                           "type": "home",
//                           "name": "Shrewsbury",
//                           "trend": 0,
//                           "goalAvg": null,
//                           "result": "0",
//                           "shortName": "SHR",
//                           "mediumName": "Shrewsbur",
//                           "countryId": 2,
//                           "countryName": "England",
//                           "isoCode": "ENG",
//                           "managerId": 0,
//                           "arenaId": 0
//                       },
//                       {
//                           "id": 133,
//                           "type": "away",
//                           "name": "Stevenage",
//                           "trend": 0,
//                           "goalAvg": null,
//                           "result": "1",
//                           "shortName": "STE",
//                           "mediumName": "Stevenage",
//                           "countryId": 2,
//                           "countryName": "England",
//                           "isoCode": "ENG",
//                           "managerId": 0,
//                           "arenaId": 0
//                       }
//                   ],
//                   "league": {
//                       "id": 8,
//                       "uniqueLeagueId": 0,
//                       "name": "League One",
//                       "shortName": null,
//                       "country": {
//                           "id": 2,
//                           "name": "England",
//                           "isoCode": "ENG",
//                           "population": 0
//                       },
//                       "code": null,
//                       "printAbbreviation": null,
//                       "season": null,
//                       "doShow": false,
//                       "isHome": false,
//                       "legacyKey": 0,
//                       "numTeams": 0,
//                       "popular": false,
//                       "rank": 0
//                   },
//                   "leagueTable": null,
//                   "result": [
//                       {
//                           "type": 9,
//                           "sportEventResultType": "Current",
//                           "description": "Current",
//                           "home": "0",
//                           "away": "1",
//                           "homePeriod": null,
//                           "awayPeriod": null
//                       },
//                       {
//                           "type": 1,
//                           "sportEventResultType": "Halftime",
//                           "description": "Mid time",
//                           "home": "0",
//                           "away": "0",
//                           "homePeriod": null,
//                           "awayPeriod": null
//                       },
//                       {
//                           "type": 6,
//                           "sportEventResultType": "Period2",
//                           "description": "Period 2",
//                           "home": "0",
//                           "away": "1",
//                           "homePeriod": null,
//                           "awayPeriod": null
//                       },
//                       {
//                           "type": 2,
//                           "sportEventResultType": "Fulltime",
//                           "description": "Full time",
//                           "home": "0",
//                           "away": "1",
//                           "homePeriod": null,
//                           "awayPeriod": null
//                       }
//                   ],
//                   "media": null,
//                   "mutuals": null
//               },
//               "odds": null,
//               "favouriteOdds": null,
//               "startOdds": {
//                   "one": "3,57",
//                   "x": "3,30",
//                   "two": "1,94"
//               },
//               "betMetrics": {
//                   "eventTypeId": 1,
//                   "eventType": "1X2",
//                   "eventSubTypeId": 2,
//                   "eventSubType": "Fulltid",
//                   "distributionDate": "2024-01-13T16:00:01.081+01:00",
//                   "distributionRefDate": "2024-01-13T15:44:23.97+01:00",
//                   "values": [
//                       {
//                           "outcome": "1",
//                           "odds": {
//                               "odds": null,
//                               "favouriteOdds": null,
//                               "startOdds": "3,57"
//                           },
//                           "distribution": {
//                               "distribution": "22",
//                               "refDistribution": "22"
//                           }
//                       },
//                       {
//                           "outcome": "X",
//                           "odds": {
//                               "odds": null,
//                               "favouriteOdds": null,
//                               "startOdds": "3,30"
//                           },
//                           "distribution": {
//                               "distribution": "29",
//                               "refDistribution": "30"
//                           }
//                       },
//                       {
//                           "outcome": "2",
//                           "odds": {
//                               "odds": null,
//                               "favouriteOdds": null,
//                               "startOdds": "1,94"
//                           },
//                           "distribution": {
//                               "distribution": "49",
//                               "refDistribution": "48"
//                           }
//                       }
//                   ]
//               },
//               "complementaryBetMetrics": [],
//               "outcomes": null,
//               "svenskaFolket": {
//                   "one": "22",
//                   "x": "29",
//                   "two": "49",
//                   "date": "2024-01-13T16:00:01.081+01:00",
//                   "refOne": "22",
//                   "refX": "30",
//                   "refTwo": "48",
//                   "refDate": "2024-01-13T15:44:23.97+01:00"
//               },
//               "tioTidningarsTips": {
//                   "one": 2,
//                   "x": 2,
//                   "two": 6
//               },
//               "providerIds": [
//                   {
//                       "provider": "BetRadar",
//                       "type": "Normal",
//                       "id": "41889445"
//                   }
//               ]
//           }
//       ],
//       "retailerOpenTime": "2024-01-08T19:00:00+01:00",
//       "retailerCloseTime": "2024-01-13T15:59:00+01:00",
//       "retailerCancelCloseTime": "2024-01-13T16:00:00+01:00",
//       "lastDateWithoutTimeOfDay": "2024-01-14T00:00:00+01:00"
//   },
//   "error": null,
//   "requestId": "4d65e96c-b256-48e3-ad85-fd5adae1c15f",
//   "sessionId": null,
//   "deviceId": "7b502730-de99-4bb5-830f-c5950a837e98",
//   "session": null,
//   "sessionUser": null,
//   "clientInfo": null,
//   "requestInfo": {
//       "transportProcessTime": 6,
//       "backendProcessTime": 2,
//       "fgwRTT": 5,
//       "backendModuleProcessTime": 3,
//       "channel": "fgw",
//       "elapsedTime": 11,
//       "apiVersion": 1
//   }
//}
