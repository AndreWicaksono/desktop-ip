import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import "./globals.css";

import NavigationBar from "@/components/molecules/NavigationBar/NavigationBar";
import getPeople from "@/lib/actions/GET/people";
import StyledComponentsRegistry from "@/lib/registry";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DesktopIP",
  description: "Andre Wicaksono",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const textNavigationBar = await getPeople();

  return (
    <html lang="en">
      <body className={gabarito.className}>
        <NavigationBar
          menus={[
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
          text={textNavigationBar.name}
        />

        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
