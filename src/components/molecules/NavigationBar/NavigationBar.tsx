"use server";

import Link, { LinkProps } from "next/link";
import { cookies } from "next/headers";
import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react";

import Button from "@/components/molecules/Button";

import NavigationAuthButton from "./NavigationAuthButton";

const NavigationBar: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
    menus: Array<{ label: string | ReactNode; props?: LinkProps }>;
    text: string;
  }
> = ({ className, menus, text, ...propsOfBaseComponent }) => {
  const classNameMobile = "inset-x-0 px-4 py-[6px]";
  const classNameDesktop =
    "lg:h-[72px] lg:inset-x-12 lg:px-12 lg:py-4 lg:rounded-lg lg:top-[18px] lg:border-[1px] lg:divide-solid lg:border-[#0249A633]";
  const defaultClassName = `bg-[#041836] text-[#FFB400] fixed flex items-center justify-between text-base top-0 z-10 ${classNameMobile} ${classNameDesktop}`;

  return (
    <nav
      className={`${className ? `${defaultClassName} ${className}` : `${defaultClassName}`}`}
      {...propsOfBaseComponent}
    >
      <ul className="hidden lg:flex [&>li:not(:last-child)]:mr-6">
        <li>
          <Link href="#">{text}</Link>
        </li>

        {menus.map((menu, menuIndex) => {
          if (typeof menu.label === "string" && menu.props)
            return (
              <li key={`link-${menu.label}`}>
                <Link {...menu.props}>{menu.label}</Link>
              </li>
            );

          if (typeof menu.label !== "string") {
            return <li key={`menu-${menuIndex}`}>{menu.label}</li>;
          }
        })}
      </ul>

      <NavigationAuthButton isLoggedIn={cookies().has("auth")} />

      <div className="basis-full flex items-center justify-between lg:hidden">
        <Button
          className="h-10 w-10 p-3"
          icon={{ height: 16, width: 15, src: `/svg/bars.svg` }}
          type="button"
        />

        <p>{text}</p>

        <Button
          className="lg:hidden h-[28px] px-2 text-xs text-[#111111] bg-[#FFB400] rounded-[100px] "
          label={{
            text: "Subscribe",
          }}
        />
      </div>
    </nav>
  );
};

export default NavigationBar;
