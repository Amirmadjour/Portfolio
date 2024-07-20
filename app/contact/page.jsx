"use client";
import clsx from "clsx";

import { useState, useEffect } from "react";

import "@/styles/utils.css";
import Confetti from "react-confetti";
import Socials from "@/components/footer/Socials";

const formElements = [
  { label: "Your name", placeHolder: "Rodrego gostav" },
  { label: "Your email", placeHolder: "info@something.com" },
  {
    label: "Your organization",
    placeHolder: "Organization & smh",
  },
  {
    label: "What services are you looking for",
    placeHolder: "Frontend development, database integration",
  },
  { label: "Your Message", placeHolder: "Your Message" },
];

const Contact = () => {
  const [confettiIsAppearing, setConfettiIsAppearing] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);
  return (
    <div className="w-screen h-fit flex flex-col px-[25px] bg-text text-background">
      <h2
        className={clsx(
          "font-normal text-[calc(clamp(3.25em,7vw,8em)*0.875)] leading-[1.1] py-[20vh]"
        )}
      >
        {"Let's team up to launch your project"}
      </h2>
      <div className="w-full h-fit flex flex-col items-center justify-center gap-10">
        <div className="w-full h-fit flex flex-col items-center justify-center gap-10 py-[10px]">
          {formElements.map(({ label, placeHolder }) => (
            <div
              key={label}
              className={clsx(
                "relative w-full flex flex-col justify-center items-center gap-5 pl-[70px] pt-10 text-base",
                "border-t border-t-background_light last-of-type:border-b last-of-type:border-b-background_light",
                "last-of-type:pb-10 input_number"
              )}
            >
              <label className="w-full text-left" htmlFor="name">
                {label}
              </label>
              <input
                className="font-medium placeholder:text-background_light bg-inherit w-full focus:outline-none"
                name="name"
                id="name"
                placeholder={placeHolder}
              ></input>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center w-full">
          <button
            className="button border-background_light"
            onClick={() => {
              setConfettiIsAppearing(true);
              setTimeout(() => {
                setConfettiIsAppearing(false);
              }, 2000);
            }}
          >
            Send it
          </button>
        </div>

        <div className="fixed w-screen h-screen inset-0 pointer-events-none">
          <Confetti
            numberOfPieces={confettiIsAppearing ? 200 : 0}
            width={dimensions.width}
            height={dimensions.height}
          />
        </div>

        <div
          className={clsx(
            "lg:hidden flex flex-col w-full h-fit text-base items-center justify-center gap-5",
            "*:w-full"
          )}
        >
          <h4 className="text-sm text-background_light text-left">
            Contact details
          </h4>
          <p className="text-base text-left">+213556326897</p>
          <p className="text-base text-left">amirmadjour133@gmail.com</p>
        </div>
        <div
          className={clsx(
            "lg:hidden flex flex-col w-full h-fit text-base items-center justify-center gap-5",
            "*:w-full"
          )}
        >
          <Socials />
          <div className=" h-[1px] bg-background_light"></div>
          <div className="text_s text-center">
            Designed and developed by{" "}
            <span className="font-semibold">Madjour Amir</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
