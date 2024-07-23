import CopyrightBar from "@/components/molecules/CopyrightBar";
import Link from "next/link";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

const Footer: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
> = (propsOfBaseComponent) => {
  return (
    <footer {...propsOfBaseComponent}>
      <div className="bg-[#FFB400] px-[27.5px] py-8 rounded-tr-[17px] rounded-tl-[17px] lg:hidden">
        <h3 className="font-bold leading-[36px] text-2xl text-[#041836] pb-8">
          {"channelName"}
        </h3>

        <div>
          <div className="pb-8">
            <p className="font-bold pb-3 text-lg leading-[27px] text-[#041836]">
              Follow Us
            </p>

            <div className="flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Facebook"
                className="mr-[30px]"
                src="/svg/facebook.svg"
                height={28}
                width={28}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Instagram"
                className="mr-[30px]"
                src="/svg/instagram.svg"
                height={28}
                width={28}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="TikTok"
                className="mr-[30px]"
                src="/svg/tiktok.svg"
                height={28}
                width={28}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Twitter"
                className="mr-[30px]"
                src="/svg/twitter.svg"
                height={28}
                width={28}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="YouTube"
                src="/svg/youtube.svg"
                height={28}
                width={28}
              />
            </div>
          </div>

          <div className="pb-8">
            <p className="font-bold pb-3 text-lg leading-[27px] text-[#041836]">
              Contact Us
            </p>

            <div className="flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Email"
                className="mr-3"
                src="/svg/envelope.svg"
                height={16}
                width={16}
              />

              <Link className="text-[#BB6002]" href="mailto:user@mail.com">
                Email to user@mail.com
              </Link>
            </div>

            <div className="flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Phone"
                className="mr-3"
                src="/svg/phone.svg"
                height={16}
                width={16}
              />
              <p className="text-[#BB6002]">Call 082143215678</p>
            </div>
          </div>

          <div>
            <p className="font-bold pb-3 text-lg leading-[27px] text-[#041836]">
              Address
            </p>

            <div className="flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Pinpoint"
                className="mr-3"
                src="/svg/location-dot.svg"
                height={16}
                width={16}
              />

              <p className="text-[#BB6002]">Address</p>
            </div>
          </div>
        </div>
      </div>

      <CopyrightBar
        text={{ xs: "Powered by Mocaas.tv", lg: "Copyright @DesktopIP" }}
      />
    </footer>
  );
};

export default Footer;
