import Link from "next/link";
import Header from "../_components/header";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const Links = [
  {
    href: "/dashboard/rounds",
    label: "Resultat",
  },
  {
    href: "/dashboard/latest/stryktipset",
    label: "Senaste matcherna",
  },
];

function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      <div className="flex flex-row">
        <aside className="w-[250px]">
          <nav className="flex flex-col items-center gap-y-4 pt-24">
            <Link href="/dashboard">
              <h2 className="text-3xl text-primary">STRYKERS</h2>
            </Link>
            <ul className="flex min-h-screen flex-col">
              {Links.map((link) => (
                <li key={link.href}>
                  <Link
                    className={cn(
                      buttonVariants({
                        variant: "link",
                      }),
                      "block w-full",
                    )}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <div className="w-full">
          <div className="flex min-h-screen w-full flex-col">{children}</div>
          <footer>
            <div className="bg-primary  py-4" />
            <div className="bg-secondary py-10 text-center text-5xl" />
          </footer>
        </div>
        <div className="min-h-screen w-[250px]"></div>
      </div>
    </>
  );
}

export default DashboardLayout;
