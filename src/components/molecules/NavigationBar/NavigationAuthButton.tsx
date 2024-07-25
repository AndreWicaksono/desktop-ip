"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

import { logout } from "@/lib/actions/POST/auth";

const NavigationAuthButton: FC<{ isLoggedIn: boolean }> = ({ isLoggedIn }) => {
  const pathname = usePathname();

  const ButtonAuth = isLoggedIn ? (
    <button
      className="hidden lg:block bg-[#FFB400] rounded-[100px] text-[#111111] px-4 py-2"
      onClick={() => logout()}
      type="button"
    >
      Sign Out
    </button>
  ) : (
    <Link
      className="hidden lg:block bg-[#FFB400] rounded-[100px] text-[#111111] px-4 py-2"
      href="/login"
    >
      Sign In
    </Link>
  );
  return (
    <>
      {pathname === "/login" ? (
        <Link
          className="hidden lg:block bg-[#FFB400] rounded-[100px] text-[#111111] px-4 py-2"
          href="#"
        >
          Sign Up
        </Link>
      ) : (
        ButtonAuth
      )}
    </>
  );
};

export default NavigationAuthButton;
