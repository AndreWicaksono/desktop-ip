import styled from "styled-components";

const BannerBase = styled.div`
  [class^="number-slide"],
  [class*=" number-slide"] {
    background: grey;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    color: #fff;
    font-weight: 500;
    height: 300px;
    max-height: 100vh;
  }

  img {
    height: 100%;
    width: 100%;

    background-repeat: no-repeat;
    object-fit: cover;
  }

  .number-slide1 {
    background: rgb(64, 175, 255);
    background: linear-gradient(
      128deg,
      rgba(64, 175, 255, 1) 0%,
      rgba(63, 97, 255, 1) 100%
    );
  }

  .number-slide2 {
    background: rgb(255, 75, 64);
    background: linear-gradient(
      128deg,
      rgba(255, 154, 63, 1) 0%,
      rgba(255, 75, 64, 1) 100%
    );
  }

  .number-slide3 {
    background: rgb(182, 255, 64);
    background: linear-gradient(
      128deg,
      rgba(182, 255, 64, 1) 0%,
      rgba(63, 255, 71, 1) 100%
    );
    background: linear-gradient(
      128deg,
      rgba(189, 255, 83, 1) 0%,
      rgba(43, 250, 82, 1) 100%
    );
  }

  .number-slide4 {
    background: rgb(64, 255, 242);
    background: linear-gradient(
      128deg,
      rgba(64, 255, 242, 1) 0%,
      rgba(63, 188, 255, 1) 100%
    );
  }

  .number-slide5 {
    background: rgb(255, 64, 156);
    background: linear-gradient(
      128deg,
      rgba(255, 64, 156, 1) 0%,
      rgba(255, 63, 63, 1) 100%
    );
  }

  .number-slide6 {
    background: rgb(64, 76, 255);
    background: linear-gradient(
      128deg,
      rgba(64, 76, 255, 1) 0%,
      rgba(174, 63, 255, 1) 100%
    );
  }
`;

export const BannerOverlayGradientBase = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;

  height: 260px;
  width: 100%;

  background: linear-gradient(360deg, #01377f 69.71%, rgba(0, 55, 127, 0) 100%);

  @media only screen and (min-width: 1024px) {
    top: 0px;
    left: 0px;

    height: 100%;
    width: 787px;

    transform: rotate(90deg);
  }
`;

export const Dots = styled.div<{ $cssDefinedByClass?: Array<string> }>`
  position: absolute;
  left: 66px;
  bottom: 53.5px;
  z-index: 2;

  ${({ $cssDefinedByClass }) =>
    $cssDefinedByClass && $cssDefinedByClass.includes("display")
      ? ""
      : "display: flex;"}

  padding: 10px 0;
  justify-content: center;

  .dot {
    border: none;
    width: 12px;
    height: 12px;
    background: #d9d9d9;
    border-radius: 50%;
    margin: 0 5px;
    padding: 5px;
    cursor: pointer;

    &.active {
      background: #ffb400;
    }

    &:focus {
      outline: none;
    }
  }
`;

export const OverlayParagraphWithEllipsis = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media only screen and (min-width: 1024px) {
    -webkit-line-clamp: 4;
  }
`;

export default BannerBase;
