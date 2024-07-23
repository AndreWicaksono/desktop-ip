import {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  ReactElement,
  ReactNode,
} from "react";

import styled from "styled-components";

const TagLabel: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> & {
    bgColor?: string;
    border?: string;
    children: ReactElement | string | ReactNode;
  }
> = ({ bgColor, border, children, ...propsOfBaseComponent }) => {
  return (
    <TagLabelBase
      $bgColor={bgColor}
      $border={border}
      className={`${propsOfBaseComponent.className}`}
      {...propsOfBaseComponent}
    >
      {children}
    </TagLabelBase>
  );
};

const TagLabelBase = styled.span<{ $border?: string; $bgColor?: string }>`
  ${({ $bgColor }) => ($bgColor ? `background-color: ${$bgColor}` : "")}
  ${({ $border }) => ($border ? `border: ${$border}` : "")}
`;

export default TagLabel;
