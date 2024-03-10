// https://api.spela.svenskaspel.se/draw/1/stryktipset/draws/4830
import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";

export const generateMetadata = () => {
  return {
    title: `Välj omgång av stryktipset`,
    description: `Välj omgång av stryktipset för att se resultat`,
  };
};

export default async function RoundLandingPage({
  children,
}: {
  children: React.ReactNode;
}) {
  noStore();

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-black text-[yellow]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <ul className="flex flex-row flex-wrap gap-4">
            <li className="text-xs hover:animate-bounce hover:underline">
              <Link
                href="/round/4831"
                className="text-2xl font-semibold text-[yellow]"
              >
                Omgång 4830
              </Link>
            </li>
            <li className="text-xs hover:animate-bounce hover:underline">
              <Link
                href="/round/4831"
                className="text-2xl font-semibold text-[yellow]"
              >
                Omgång 4831
              </Link>
            </li>
            <li className="text-xs hover:animate-bounce hover:underline">
              <Link
                href="/round/4832"
                className="text-2xl font-semibold text-[yellow]"
              >
                Omgång 4832
              </Link>
            </li>
            <li className="text-xs hover:animate-bounce hover:underline">
              <Link
                href="/round/4833"
                className="text-2xl font-semibold text-[yellow]"
              >
                Omgång 4833
              </Link>
            </li>
            <li className="text-xs hover:animate-bounce hover:underline">
              <Link
                href="/round/4834"
                className="text-2xl font-semibold text-[yellow]"
              >
                Omgång 4834
              </Link>
            </li>
            <li className="text-xs hover:animate-bounce hover:underline">
              <Link
                href="/round/4835"
                className="text-2xl font-semibold text-[yellow]"
              >
                Omgång 4835
              </Link>
            </li>
            <li className="text-xs hover:animate-bounce hover:underline">
              <Link
                href="/round/4836"
                className="text-2xl font-semibold text-[yellow]"
              >
                Omgång 4836
              </Link>
            </li>
            <li className="text-xs hover:animate-bounce hover:underline">
              <Link
                href="/round/4837"
                className="text-2xl font-semibold text-[yellow]"
              >
                Omgång 4837
              </Link>
            </li>
            <li className="text-xs hover:animate-bounce hover:underline">
              <Link
                href="/round/4838"
                className="text-2xl font-semibold text-[yellow]"
              >
                Omgång 4838
              </Link>
            </li>
            <li className="text-xs hover:animate-bounce hover:underline">
              <Link
                href="/round/4839"
                className="text-2xl font-semibold text-[yellow]"
              >
                Omgång 4839
              </Link>
            </li>
          </ul>
        </div>
        {children}
      </main>
    </>
  );
}
