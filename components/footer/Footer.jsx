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
        "md:px-20 py-4 overflow-hidden"
      )}
    >
      <div
        className={clsx(
          "w-full h-full flex flex-col items-center justify-between gap-[20vh]"
        )}
      >
        <div className="flex max-md:flex-col w-full h-fit gap-10 md:justify-between items-center lg:mb-[20vw]">
          <DelayedLink href="/contact">
            <p className="text-2xl font-medium">Get in touch with us now!</p>
          </DelayedLink>
          <div className="w-full flex items-center max-md:flex-col md:w-fit justify-between gap-5">
            {buttons.map(({ text, copied, setCopied }) => (
              <button
                key={text}
                onClick={() => handleCopy({ text, setCopied })}
                className={clsx(
                  "button border-background_light w-full md:border-none md:w-fit ",
                  "py-3"
                )}
              >
                {copied ? "copied" : text}
              </button>
            ))}
          </div>
        </div>
        <div className="lg:hidden flex flex-col w-full h-fit text-base leading-none justify-center gap-5">
          <Socials />
        </div>
      </div>
      <p
        className="bottom-0 absolute text-[28vw] select-none translate-y-1/4"
        style={{ fontFamily: "var(--font-kaushan-sans)" }}
      >
        madjour
      </p>
    </div>
  );
};

export default Footer;
