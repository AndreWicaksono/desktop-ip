"use client";

import { FC, useState } from "react";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import BannerBase, {
  BannerOverlayGradientBase,
  Dots,
  OverlayParagraphWithEllipsis,
} from "./Banner.css";
import Button from "@/components/molecules/Button";
import TagLabel from "@/components/atoms/TagLabel";

const Banner: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [refSlider, refInstance] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <div className="px-4">
        <BannerBase
          ref={refSlider}
          className="keen-slider pt-14 lg:pt-0 h-[500px] lg:h-[787.5px]"
        >
          <div className="keen-slider__slide number-slide1 rounded-lg lg:rounded-none">
            1
          </div>
          <div className="keen-slider__slide number-slide2 rounded-lg lg:rounded-none">
            2
          </div>
          <div className="keen-slider__slide number-slide3 rounded-lg lg:rounded-none">
            3
          </div>
          <div className="keen-slider__slide number-slide4 rounded-lg lg:rounded-none">
            4
          </div>
          <div className="keen-slider__slide number-slide5 rounded-lg lg:rounded-none">
            5
          </div>
          <div className="keen-slider__slide number-slide6 rounded-lg lg:rounded-none">
            6
          </div>
        </BannerBase>
      </div>

      <div className="absolute pointer-events-none h-[500px] lg:h-[787.5px] top-0 lg:top-0 inset-x-4 lg:inset-x-[unset] lg:inset-y-0">
        <div className="relative px-[26px] pb-[26px] lg:p-0 h-[500px] lg:h-full w-100 lg:w-[787px] flex items-end lg:items-center lg:pl-12">
          <div className="max-w-full lg:max-w-[418px] relative text-white z-[5]">
            <h3 className="pb-3 lg:pb-4 leading-[32.11px] lg:leading-[52.5px] text-[25.69px] lg:text-[42px] lg:pb-4">
              Video Title Video Title Video Title Video Title
            </h3>

            <div className="lg:block pb-4 lg:text-[rgba(255,_255,_255,_66%)]">
              <TagLabel className="text-xs lg:text-base font-medium lg:font-normal p-[6px] lg:p-0 mr-[14px] lg:mr-0 radius-[2.4px] text-[#FFE546] lg:text-[rgba(255,_255,_255,_66%)] bg-[#0249A6] lg:bg-transparent">
                2022
              </TagLabel>{" "}
              <span className="hidden lg:inline"> | </span>
              <TagLabel className="text-xs lg:text-base font-medium lg:font-normal p-[6px] lg:p-0 mr-[14px] lg:mr-0 radius-[2.4px] text-[#FFE546] lg:text-[rgba(255,_255,_255,_66%)] bg-[#0249A6] lg:bg-transparent">
                2H 23m
              </TagLabel>
              <TagLabel className="text-xs lg:text-base font-medium lg:font-normal lg:hidden p-[6px] mr-[14px] radius-[2.4px] text-[#FFE546] lg:text-[rgba(255,_255,_255,_66%)] bg-[#0249A6] lg:bg-transparent">
                Action
              </TagLabel>
            </div>

            <OverlayParagraphWithEllipsis className="mb-3 lg:mb-4 leading-[15px] text-xs lg:leading-5 lg:text-base lg:pb-4 text-[rgba(255,_255,_255,_66%)]">
              Soda and Gembira are two best friends who have a lot in common.
              Their friendship begins to fall apart when they meet Jennie, a
              beautiful woman who is also an environmental activist. They were
              both interested and tried to win Jennie &apos s heart. However,
              Jennie did not choose one of the two and decided to remain
              friends.
            </OverlayParagraphWithEllipsis>

            <div className="flex lg:contents">
              <Button
                className="mr-3 lg: mr-0 inline-flex items-center justify-center bg-[#FFB400] rounded-[100px] text-[13.23px] text-[#111111] h-[33px] lg:h-[40px] basis-[114px] lg:basis-unset lg:w-[138px]"
                icon={{
                  className: "mr-2 lg:h-[16px] lg:w-[12px]",
                  height: 14,
                  width: 10,
                  src: `/svg/play.svg`,
                }}
                label={{
                  props: {
                    className: "font-semibold",
                  },
                  text: "Play",
                }}
              />

              <Button
                className="lg:hidden border border-solid border-[#FFB400] inline-flex lg:hidden items-center justify-center bg-transparent rounded-[100px] text-[13.23px] text-[#FFB400] h-[33px] lg:h-[40px] basis-[122px] lg:basis-unset lg:w-[138px]"
                icon={{
                  className: "mr-2 lg:h-[16px] lg:w-[12px]",
                  height: 14,
                  width: 10,
                  src: `/svg/share-nodes.svg`,
                }}
                label={{
                  props: {
                    className: "font-semibold",
                  },
                  text: "Subscribe",
                }}
              />
            </div>
          </div>

          <BannerOverlayGradientBase className="rounded-lg lg:rounded-none" />

          {loaded && refInstance.current && (
            <Dots className="hidden lg:flex" cssDefinedByClass={["display"]}>
              {Array.from(
                Array(refInstance.current.track.details.slides.length).keys()
              ).map((idx) => {
                return (
                  <button
                    key={`slide-${idx}`}
                    onClick={() => {
                      refInstance.current?.moveToIdx(idx);
                    }}
                    className={"dot" + (currentSlide === idx ? " active" : "")}
                  ></button>
                );
              })}
            </Dots>
          )}
        </div>
      </div>
    </>
  );
};

export default Banner;
