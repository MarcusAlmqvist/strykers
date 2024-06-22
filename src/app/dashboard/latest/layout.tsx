import Hero from "@/app/_components/hero";
import { unstable_noStore as noStore } from "next/cache";

export default async function RoundLandingPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  noStore();

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero title="Senaste matcherna" />
      {children}
    </main>
  );
}
