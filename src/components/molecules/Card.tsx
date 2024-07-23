"use client";

import {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  ImgHTMLAttributes,
} from "react";
import styled from "styled-components";

import TagLabel from "@/components/atoms/TagLabel";

const Card: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    img: DetailedHTMLProps<
      ImgHTMLAttributes<HTMLImageElement>,
      HTMLImageElement
    >;
    tag?: string;
    text?: string;
  }
> = ({ img, tag, text, ...propsOfBaseComponent }) => {
  return (
    <div className="relative h-full w-full" {...propsOfBaseComponent}>
      {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
      <img {...img} />

      <CardBottomGradient>
        <div className="flex items-end h-full px-[10.67px] pb-[10.89px]">
          <div className="flex items-center">
            {text ? (
              <span className="text-white font-medium leading-[12.8px] text-[10.67px] pe-1 lg:-pe-2 lg:text-base lg:leading-[19.2px]">
                {text}
              </span>
            ) : null}

            {tag ? (
              <TagLabel
                bgColor="#FFB400"
                className="px-[5.33px] lg:px-2 lg:py-1 py-[5.33px] leading-[6px] text-[10px] text-[#041836] lg:text-xs rounded-[1.61px] lg:rounded"
              >
                {tag}
              </TagLabel>
            ) : null}
          </div>
        </div>
      </CardBottomGradient>
    </div>
  );
};

const CardBottomGradient = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;

  width: 100%;
  height: 56.75px;

  background: linear-gradient(0deg, #041836 0%, rgba(4, 24, 54, 0) 72.08%);

  @media only screen and (min-width: 1024px) {
    height: 141px;
  }
`;

export default Card;
