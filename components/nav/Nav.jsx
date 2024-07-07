"use client";

import Link from "next/link";
import HamburgerSVG from "@/public/SVG/HamburgerSVG";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";
import CancelSVG from "@/public/SVG/CancelSVG";
import DelayedLink from "./DelayedLink";
import Curve from "./Curve";

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
    <nav className="fixed left-0 top-0 flex items-center z-[1] justify-between w-screen h-20 m-0 px-10 max-sm:px-[25px]">
      <Link href="/">© Madjour amir</Link>
      {/* Desktop Navigation */}

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
      <div className="max-sm:hidden flex relative">
        <div className="flex">
          <button
            onClick={() => {
              setToggleSideMenu((prev) => !prev);
            }}
            className="flex w-6 h-6 items-center justify-center z-10"
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
                  "fixed top-0 right-0 h-screen w-[400px] bg-text",
                  "flex flex-col items-center justify-center px-4 gap-14 text-left ",
                  "text-5xl *:w-40 text-background"
                )}
              >
                <Curve />
                <DelayedLink href="/" fn={() => setToggleSideMenu(false)}>
                  Home
                </DelayedLink>
                <DelayedLink href="/work" fn={() => setToggleSideMenu(false)}>
                  Work
                </DelayedLink>
                <DelayedLink href="/about" fn={() => setToggleSideMenu(false)}>
                  About
                </DelayedLink>
                <DelayedLink
                  href="/contact"
                  fn={() => setToggleSideMenu(false)}
                >
                  Contact
                </DelayedLink>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        <div className="flex">
          <button
            onClick={() => {
              setToggleSideMenu((prev) => !prev);
            }}
            className="flex w-6 h-6 items-center justify-center z-10"
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
                  "fixed top-0 left-0 h-screen w-screen bg-text",
                  "flex flex-col items-center justify-center px-4 gap-14 text-left ",
                  "text-5xl *:w-40 text-background"
                )}
              >
                <Curve />
                <Link
                  href="/"
                  className=""
                  onClick={() => setToggleSideMenu(false)}
                >
                  Home
                </Link>
                <Link
                  href="/work"
                  className=""
                  onClick={() => setToggleSideMenu(false)}
                >
                  Work
                </Link>
                <Link
                  href="/about"
                  className=""
                  onClick={() => setToggleSideMenu(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className=""
                  onClick={() => setToggleSideMenu(false)}
                >
                  Contact
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
