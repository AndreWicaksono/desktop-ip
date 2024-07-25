"use client";

import { DetailedHTMLProps, FC, HTMLAttributes, useState } from "react";

import Link from "next/link";
import styled from "styled-components";

import InputWithLabel from "./Input";

const FormLogin: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ ...propsOfBaseComponent }) => {
  const [email, setEmail] = useState<string>("");

  return (
    <FormLoginBase className="px-14" {...propsOfBaseComponent}>
      <div className="relative h-full w-full flex items-center justify-center">
        <div className="p-8">
          <Heading className="pb-6">Sign In</Heading>

          <InputWithLabel
            classNameContainer="mb-6"
            label="Email"
            name="email"
            onChange={(e) => setEmail(e.currentTarget.value)}
            placeholder="Enter email"
            type="email"
            value={email}
          />

          <Button className="mb-6 py-2 font-semibold" disabled type="button">
            Sign In
          </Button>

          <div className="flex flex-col items-center justify-center">
            <LinkNavigation className="mb-6 whitespace-nowrap" href="#">
              Forgot Password?
            </LinkNavigation>

            <p className="text-[#606666]">
              {"Don't"} have an account?{" "}
              <LinkNavigation href="#">Sign Up</LinkNavigation>
            </p>
          </div>
        </div>
      </div>
    </FormLoginBase>
  );
};

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 40px;
  width: 100%;

  background: #666666;
  border-radius: 100px;

  &:disabled {
    color: #888888;
  }
`;

const Heading = styled.h3`
  font-family: "Gabarito";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 32px;

  color: #041836;
`;

const LinkNavigation = styled(Link)`
  height: 24px;
  width: 123px;

  color: #0249a6;
  font-family: "Gabarito";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

const FormLoginBase = styled.div`
  position: absolute;
  top: 0;
  left: calc(50% - 612px / 2);

  height: 789px;
  width: 612px;

  background: #ffffff;
  border-radius: 16px;
`;

export default FormLogin;
