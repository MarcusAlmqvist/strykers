// https://api.spela.svenskaspel.se/draw/1/stryktipset/draws/4830
import Hero from "@/app/_components/hero";
import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";

export const generateMetadata = () => {
  return {
    title: `Välj av stryktipset`,
    description: `Välj av stryktipset för att se resultat`,
  };
};

export default async function RoundLandingPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  noStore();

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero title="Stryktipset" />
      {children}
    </main>
  );
}
