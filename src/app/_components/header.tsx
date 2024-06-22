import { unstable_noStore as noStore } from "next/cache";
import dynamic from "next/dynamic";
import ThemeToggle from "./theme-toggle";
import SignOutButton from "./sign-out";

const TickingClock = dynamic(() => import("./ticking-clock"), { ssr: false });

const Header = async () => {
  noStore();
  return (
    <div className="z-10 flex w-full flex-row items-center justify-between gap-4 p-2 px-6 sm:top-0">
      <span className="inline-flex items-center gap-x-6">
        <ThemeToggle />
      </span>
      <span className="inline-flex items-center gap-x-6">
        <TickingClock />
        <SignOutButton />
      </span>
    </div>
  );
};

export default Header;
