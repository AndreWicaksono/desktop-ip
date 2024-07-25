import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";

import styled from "styled-components";

const InputWithLabel: FC<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    classNameContainer?: string;
    label?: string;
  }
> = ({ classNameContainer, label, ...propsOfBaseComponent }) => {
  return (
    <InputWithLabelBase className={classNameContainer}>
      {label ? (
        <LabelInput htmlFor={propsOfBaseComponent.name}>{label}</LabelInput>
      ) : (
        ""
      )}
      <Input {...propsOfBaseComponent} />
    </InputWithLabelBase>
  );
};

const LabelInput = styled.label`
  font-family: "Gabarito";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  /* Neutral/Grey 200 */
  color: #888888;
`;

const InputWithLabelBase = styled.div`
  /* Input */

  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;

  width: 436px;
  height: 68px;

  /* Inside auto layout */
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

const Input = styled.input`
  /* Field */

  box-sizing: border-box;

  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 16px;
  gap: 10px;

  width: 436px;
  height: 40px;

  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(4, 24, 54, 0.1);
  border-radius: 100px;

  /* Inside auto layout */
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

export default InputWithLabel;
