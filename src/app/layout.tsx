import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import "./globals.css";

import NavigationBar from "@/components/molecules/NavigationBar";
import StyledComponentsRegistry from "@/lib/registry";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={gabarito.className}>
        <NavigationBar
          menus={[
            { label: "channelName", props: { href: "#" } },
            { label: "Home", props: { href: "/" } },
            {
              label: (
                <button className="inline-flex items-center" type="button">
                  <span className="pe-[11px]">Browse</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Caret Down"
                    height={16}
                    width={10}
                    src="/svg/caret-down.svg"
                  />
                </button>
              ),
            },
            {
              label: (
                <button className="inline-flex items-center" type="button">
                  <span className="pe-[11px]">My Library</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Caret Down"
                    height={16}
                    width={10}
                    src="/svg/caret-down.svg"
                  />
                </button>
              ),
            },
          ]}
        />

        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
