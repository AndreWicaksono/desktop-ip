"use client";

import { ReactNode } from "react";

import Banner from "@/components/organisms/Slider/Banner/Banner";

import { useFilms } from "@/lib/actions/GET/films";
import TagLabel from "@/components/atoms/TagLabel";

const BannerFilms = () => {
  const { data, error, loading } = useFilms();

  if (error) return null;

  if (loading)
    return (
      <div className="pb-[34px] lg:pb-[109px] bg-[#041836]">
        <div className="h-[500px] lg:h-[787.5px] bg-[#01377f]"></div>
      </div>
    );

  const slides: {
    heading: string;
    paragraph: string;
    photo: string;
    tag?: ReactNode;
  }[] = data.results.map((slide) => ({
    heading: slide.title,
    paragraph: slide.opening_crawl,
    photo: "/image-120.jpg",
    tag: (
      <div className="lg:block pb-4 lg:text-[rgba(255,_255,_255,_66%)]">
        <TagLabel className="text-xs lg:text-base font-medium lg:font-normal p-[6px] lg:p-0 mr-[14px] lg:mr-0 radius-[2.4px] text-[#FFE546] lg:text-[rgba(255,_255,_255,_66%)] bg-[#0249A6] lg:bg-transparent">
          {slide.release_date.split("-")[0]}
        </TagLabel>{" "}
        <span className="hidden lg:inline"> | </span>
        <TagLabel className="text-xs lg:text-base font-medium lg:font-normal p-[6px] lg:p-0 mr-[14px] lg:mr-0 radius-[2.4px] text-[#FFE546] lg:text-[rgba(255,_255,_255,_66%)] bg-[#0249A6] lg:bg-transparent">
          2H 23m
        </TagLabel>
        <TagLabel className="text-xs lg:text-base font-medium lg:font-normal lg:hidden p-[6px] mr-[14px] radius-[2.4px] text-[#FFE546] lg:text-[rgba(255,_255,_255,_66%)] bg-[#0249A6] lg:bg-transparent">
          Action
        </TagLabel>
      </div>
    ),
  }));

  return (
    <Banner
      classNameContainer="px-4 lg:px-0 pb-[34px] lg:pb-[109px] bg-[#041836]"
      slides={slides}
    />
  );
};

export default BannerFilms;
