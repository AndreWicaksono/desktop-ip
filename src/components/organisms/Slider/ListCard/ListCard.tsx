"use client";

import * as React from "react";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import Card from "@/components/molecules/Card";

import ListCardBase, { ArrowsBase } from "./ListCard.css";

const ListCard: React.FC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > & {
    classNameContainer?: string;
    classNameHeading?: string;
    heading?: string;
    slides: Array<{
      img: React.DetailedHTMLProps<
        React.ImgHTMLAttributes<HTMLImageElement>,
        HTMLImageElement
      >;
      tag?: string;
      text?: string;
    }>;
  }
> = ({
  classNameContainer,
  classNameHeading,
  heading,
  slides,
  ...propsOfBaseComponent
}) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);
  const [refSlider, refInstance] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      "(min-width: 0px)": {
        slides: { perView: 2, spacing: 8 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3.2, spacing: 16 },
      },
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    slides: { perView: 1 },
  });

  return (
    <div className={classNameContainer + ` relative`}>
      {heading ? (
        <h3 className={`font-bold pb-3 ${classNameHeading}`}>{heading}</h3>
      ) : null}

      <ListCardBase
        className={`keen-slider ${propsOfBaseComponent.className}`}
        ref={refSlider}
        {...propsOfBaseComponent}
      >
        {slides.length > 0 &&
          slides.map((slide) => (
            <div className="keen-slider__slide" key={`slide-${slide.text}`}>
              <Card
                img={{
                  className: slide.img.className,
                  src: slide.img.src,
                }}
                tag={slide.tag}
                text={slide.text}
              />
            </div>
          ))}
      </ListCardBase>

      {loaded && refInstance.current && (
        <>
          <Arrow
            left
            onClick={(e: any) =>
              e.stopPropagation() || refInstance.current?.prev()
            }
            disabled={currentSlide === 0}
          />

          <Arrow
            onClick={(e: any) =>
              e.stopPropagation() || refInstance.current?.next()
            }
            disabled={
              currentSlide ===
              refInstance.current.track.details.slides.length - 3
            }
          />
        </>
      )}
    </div>
  );
};

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <ArrowsBase>
      <button
        className={`hidden arrow ${
          props.left ? "arrow--left" : "arrow--right"
        } ${disabled} px-6 py-3 bg-[#0249A6] rounded w-[60px] h-[60px] lg:block`}
        onClick={props.onClick}
        type="button"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="Arrow" src="/svg/chevron.svg" height={16} width={16} />
      </button>
      {/* <svg
        onClick={props.onClick}
        className={`arrow ${
          props.left ? "arrow--left" : "arrow--right"
        } ${disabled}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg> */}
    </ArrowsBase>
  );
}

export default ListCard;
