import "@/styles/globals.css";

import { Pixelify_Sans } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import { SessionProvider } from "next-auth/react";
import AuthStatus from "./_components/AuthStatus";

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Strykers",
  description:
    "A place for strykers to track their progress and compete with each other.",
  favicon: "/favicon.ico",
  appleTouchIcon: "/apple-touch-icon.png",
  icon32: "/favicon-32x32.png",
  icon16: "/favicon-16x16.png",
  manifest: "/site.webmanifest",
  safariPinnedTab: "/safari-pinned-tab.svg",
  msTileColor: "#000000",
  font: pixelify.variable,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${pixelify.variable}`}>
        <AuthStatus />
        <TRPCReactProvider>
          <div className="pt-12">{children}</div>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
