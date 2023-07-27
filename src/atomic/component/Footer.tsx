import React from "react";
import Image from "next/image";
import { FooterColumnProps } from "@/types/component.types";
import { footerLinks } from "@/constant/data";
import Link from "next/link";

const FooterColumn = (props: FooterColumnProps) => (
  <div className="footer_column">
    <h4 className="font-semibold"> {props.title} </h4>
    <ul className="flex flex-col gap-2 font-normal">
      {props.links.map((link, i: number) => (
        <Link href={"/"} key={i}>
          {link}
        </Link>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="flexStart footer">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex flex-col items-start">
          <Image
            src={"/logo-purple.svg"}
            alt="Flexibble"
            width={115}
            height={38}
          />
          <p className="text-start text-sm font-normal mt-5 max-w-xs">
            Flexibble is the world&apos;s leading community for creatives to
            share, grow, and get hired.
          </p>
        </div>
        <div className="flex flex-wrap gap-12">
          {footerLinks.map((link) => (
            <FooterColumn title={link.title} links={link.links} />
          ))}
        </div>
      </div>
      <div className="flexBetween footer_copyright">
        <p>@ 2023 flexibble. All rights reserved</p>
        <p className="text-gray">
          <span className="text-black font-semibold">10,2014</span>
          projects submitted
        </p>
      </div>
    </footer>
  );
};

export { Footer };
