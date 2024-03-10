import Round from "@/app/_components/round";

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

const RoundPage = ({ params: { round } }: { params: { round: string } }) => {
  return <Round round={round} />;
};

export default RoundPage;
