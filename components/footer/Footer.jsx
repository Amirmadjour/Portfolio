"use client";
import Image from "next/image";
import a1 from "@/public/images/other/cat.jpg";
import DelayedLink from "../nav/DelayedLink";
import { useState } from "react";
import clsx from "clsx";

import "@/styles/utils.css";
import Socials from "./Socials";

const Footer = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = async ({ text, setCopied }) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      100 % setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const buttons = [
    {
      text: "amirmadjour133@gmail.com",
      copied: copiedEmail,
      setCopied: setCopiedEmail,
    },
    { text: "0556326897", copied: copiedPhone, setCopied: setCopiedPhone },
  ];

  return (
    <div
      className={clsx(
        "relative w-screen min-h-screen h-fit flex flex-col justify-center items-center px-[25px] bg-text text-background",
        "md:px-20 py-4"
      )}
    >
      <div
        className={clsx(
          "max-w-[1100px] w-full h-full flex text-[100px] leading-none items-center justify-between gap-[3vh]",
          "max-md:text-[60px] max-md:text-center max-lg:justify-center max-lg:flex-col md:gap-10 lg:gap-[60px]"
        )}
      >
        <div className="flex flex-col w-full md:w-fit h-fit gap-10 items-center lg:items-start">
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-start gap-6">
              <Image
                src={a1}
                height={80}
                width={80}
                className="rounded-full aspect-square h-20 object-cover"
                alt=""
              ></Image>
              <p>{"Let's"} </p>
            </div>
            <p>partner up</p>
          </div>
          <div className="flex items-center max-md:flex-col max-md:w-full justify-between gap-5">
            {buttons.map(({ text, copied, setCopied }) => (
              <button
                key={text}
                onClick={() => handleCopy({ text, setCopied })}
                className={clsx("button border-background_light w-full")}
              >
                {copied ? "copied" : text}
              </button>
            ))}
          </div>
        </div>
        <div className="h-[600px] w-[1px] bg-background_light max-lg:hidden"></div>
        <DelayedLink
          href="/contact"
          className={clsx(
            "rounded-full w-40  aspect-square bg-primary flex items-center justify-center text-xl ",
            "max-md:w-[120px] max-md:text-[14px] leading-none"
          )}
        >
          Drop a line
        </DelayedLink>
        <div className="lg:hidden flex flex-col w-full h-fit text-base leading-none justify-center gap-5">
          <Socials />
          <div className="w-full h-[1px] bg-background_light"></div>
          <div className="text_s">
            Designed and developed by{" "}
            <span className="font-semibold">Madjour Amir</span>
          </div>
        </div>
      </div>
      <div className="hidden lg:block absolute bottom-0 left-1/2 -translate-x-1/2">
        Designed and developed by{" "}
        <span className="font-semibold">Madjour Amir</span>
      </div>
    </div>
  );
};

export default Footer;
