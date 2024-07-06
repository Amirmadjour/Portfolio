"use client";

import Link from "next/link";
import HamburgerSVG from "@/public/SVG/HamburgerSVG";
import { useState } from "react";

const Nav = () => {
  const [toggleSideMenu, setToggleSideMenu] = useState(false);
  return (
    <nav className="fixed left-0 top-0 flex items-center justify-between w-screen h-20 m-0 px-10 max-sm:px-[25px]">
      <Link href="/" className="flex gap-2 flex-center">
        <p className="">© Madjour amir</p>
      </Link>
      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        <div className="flex gap-3 md:gap-5">
          <Link href="/work" className="">
            Work
          </Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        <div className="flex">
          <button
            onClick={() => {
              setToggleSideMenu((prev) => !prev);
            }}
            className="flex w-6 aspect-square items-center justify-center"
          >
            <HamburgerSVG color="white" />
          </button>
          {toggleSideMenu && (
            <div className="">
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
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
