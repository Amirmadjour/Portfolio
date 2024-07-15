"use client";

import HamburgerSVG from "@/public/SVG/HamburgerSVG";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useEffect, useState } from "react";
import clsx from "clsx";
import CancelSVG from "@/public/SVG/CancelSVG";
import DelayedLink from "./DelayedLink";
import { usePathname } from "next/navigation";
import { navSlide } from "./anim";
import Curve from "./Curve";

import "@/styles/utils.css";

const Nav = () => {
  const pathName = usePathname();
  const [doesNavBtnAppear, setDoesNavBtnAppear] = useState(false);
  const { scrollY } = useScroll();
  const [toggleSideMenu, setToggleSideMenu] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest);
    if (latest > 400) {
      setDoesNavBtnAppear(true);
    } else {
      setDoesNavBtnAppear(false);
    }
  });

  useEffect(() => {
    console.log("pathName: ", pathName);
  }, [pathName]);

  return (
    <>
      <AnimatePresence mode="wait">
        {(doesNavBtnAppear || toggleSideMenu) && (
          <div
            className={clsx(
              "fixed flex top-0 right-0 items-center justify-center w-20 z-[1] aspect-square mr-[13px]"
            )}
          >
            <motion.button
              layout
              initial={{ borderRadius: 50, width: 0 }}
              animate={{
                width: 56,
                transition: { duration: 0.3, ease: [0.83, 0, 0.17, 1] },
              }}
              exit={{
                borderRadius: 50,
                width: 0,
                transition: {
                  duration: 0.4,
                  ease: [0.83, 0, 0.17, 1],
                },
              }}
              className={clsx(
                "relative flex items-center justify-center bg-primary aspect-square rounded-full"
              )}
              onClick={() => {
                setToggleSideMenu((prev) => !prev);
              }}
            >
              {toggleSideMenu ? <CancelSVG /> : <HamburgerSVG color="white" />}
            </motion.button>
          </div>
        )}
      </AnimatePresence>
      <nav
        className={clsx(
          "absolute left-0 top-0 flex items-center justify-between w-screen h-20 m-0 sm:px-10 px-[25px]",
          "bg-transparent backdrop-blur-sm"
        )}
      >
        <DelayedLink
          href="/"
          className={clsx(
            pathName === "/" || pathName === "/contact"
              ? "text-background"
              : "text-text"
          )}
        >
          © Madjour amir
        </DelayedLink>

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

        <button
          className={clsx(
            "flex items-center justify-center w-14 z-10 aspect-square text-background rounded-full"
          )}
          onClick={() => {
            setToggleSideMenu((prev) => !prev);
          }}
        >
          Menu
        </button>
      </nav>
      <AnimatePresence>
        {toggleSideMenu && (
          <motion.nav
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
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
