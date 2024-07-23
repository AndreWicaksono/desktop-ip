import styled from "styled-components";

const ListCardBase = styled.div`
  [class^="slide-content"],
  [class*=" slide-content"] {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 96px;

    color: #fff;
  }

  @media only screen and (min-width: 1024px) {
    height: 238.5px;
  }
`;

export const ArrowsBase = styled.div`
  .arrow {
    /* width: 30px;
    height: 30px; */
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    /* fill: #fff; */
    cursor: pointer;
  }

  .arrow--left {
    left: 5px;

    img {
      transform: rotate(180deg);
    }
  }

  .arrow--right {
    left: auto;
    right: 48px;
  }

  .arrow--disabled {
    fill: rgba(255, 255, 255, 0.5);
    display: none;
  }
`;

export default ListCardBase;
