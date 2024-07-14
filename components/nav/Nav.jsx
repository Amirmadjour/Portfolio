"use client";

import HamburgerSVG from "@/public/SVG/HamburgerSVG";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";
import CancelSVG from "@/public/SVG/CancelSVG";
import DelayedLink from "./DelayedLink";
import Curve from "./Curve";

import "@/styles/utils.css";

const Nav = () => {
  const [toggleSideMenu, setToggleSideMenu] = useState(false);

  const navSlide = {
    initial: {
      x: "calc(100% + 100px)",
    },
    enter: {
      x: "0%",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      x: "calc(100% + 100px)",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };
  return (
    <nav className="fixed left-0 top-0 flex items-center justify-between z-[1] w-screen h-20 m-0 px-10 max-sm:px-[25px]">
      <DelayedLink href="/">© Madjour amir</DelayedLink>

      {/* inline navigation */}
      {/* <div className="sm:flex hidden">
        <div className="flex gap-3 md:gap-5">
          <Link href="/work" className="">
            Work
          </Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
  </div> */}

      {/* side navigation */}
      <div className="flex relative">
        <div className="flex">
          <button
            className="flex items-center justify-center bg-primary w-14 z-10 aspect-square rounded-full"
            onClick={() => {
              setToggleSideMenu((prev) => !prev);
            }}
          >
            {toggleSideMenu ? <CancelSVG /> : <HamburgerSVG color="white" />}
          </button>
          <AnimatePresence>
            {toggleSideMenu && (
              <motion.div
                variants={navSlide}
                initial="initial"
                animate="enter"
                exit="exit"
                className={clsx(
                  "fixed top-0 right-0 h-screen sm:w-[400px] max-sm:w-screen bg-text",
                  "flex flex-col items-center justify-center px-4 gap-4 text-left",
                  "text-5xl text-background *:w-full"
                )}
              >
                <Curve />
                <p className="text-background_light text-[14px] leading-snug">
                  Navigation
                </p>
                <div className="bg-background_light h-[1px]"></div>
                <div
                  className={clsx(
                    "flex flex-col items-center justify-center gap-4 *:w-full h-fit py-4",
                    "*:px-5"
                  )}
                >
                  <DelayedLink
                    href="/"
                    className={"relative custom_circle"}
                    fn={() => setToggleSideMenu(false)}
                  >
                    Home
                  </DelayedLink>
                  <DelayedLink
                    href="/work"
                    className={"relative custom_circle"}
                    fn={() => setToggleSideMenu(false)}
                  >
                    Work
                  </DelayedLink>
                  <DelayedLink
                    href="/about"
                    className={"relative custom_circle"}
                    fn={() => setToggleSideMenu(false)}
                  >
                    About
                  </DelayedLink>
                  <DelayedLink
                    href="/contact"
                    className={"relative custom_circle"}
                    fn={() => setToggleSideMenu(false)}
                  >
                    Contact
                  </DelayedLink>
                </div>
                <div className="bg-background_light h-[1px]"></div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
