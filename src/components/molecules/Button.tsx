"use client";

import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  ImgHTMLAttributes,
} from "react";

const Button: FC<
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & {
    icon?: DetailedHTMLProps<
      ImgHTMLAttributes<HTMLImageElement>,
      HTMLImageElement
    > | null;
    label?: {
      props?: DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLElement>;
      text?: string;
    };
  }
> = ({ icon, label, ...propsOfBaseComponent }) => {
  return (
    <button {...propsOfBaseComponent}>
      {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
      {icon ? <img {...icon} /> : null}

      {label ? <span {...label.props}>{label.text}</span> : null}
    </button>
  );
};

export default Button;
