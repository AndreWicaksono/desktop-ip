import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

const CopyrightBar: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    text: { xs: string; lg: string };
  }
> = ({ text, ...propsOfBaseComponent }) => {
  return (
    <div
      className="bg-[#0249A6] flex justify-center p-5 rounded-br-[17px] rounded-bl-[17px] lg:rounded-br-none lg:rounded-bl-none text-white"
      {...propsOfBaseComponent}
    >
      <span className="lg:hidden">{text.xs}</span>
      <span className="hidden lg:inline">{text.lg}</span>
    </div>
  );
};

export default CopyrightBar;
