import dynamic from "next/dynamic";
import { type Round as RoundType } from "@/types/rounds";
import RoundTable from "@/app/_components/round";

export async function generateMetadata({
  params: { round },
}: {
  params: { round: string };
}) {
  return {
    title: `Omgång ${round} av stryktipset`,
    description: `Resultat för omgång ${round} av stryktipset`,
  };
}

const RoundPage = async ({
  params: { round },
}: {
  params: { round: string };
}) => {
  const roundResults = (await fetch(
    `https://api.spela.svenskaspel.se/draw/1/stryktipset/draws/${round}`,
  ).then((res) => res.json())) as RoundType;

  return (
    <>
      <h2 className="text-3xl">{roundResults?.draw?.drawComment}</h2>

      <div>
        Status:
        {roundResults?.draw?.drawState === "Open" ? "Ej avslutad" : "Avslutad"}
      </div>
      <RoundTable roundResults={roundResults} />
    </>
  );
};

export default RoundPage;
