"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { text, curve, translate } from "./anim";
import clsx from "clsx";
import usePageTransition from "@/zustand/pageTransition";

const anim = (variants) => {
  return {
    variants,
    initial: "initial",
    animate: "enter",
    exit: "exit",
  };
};

export default function Curve({ children }) {
  const { routePath } = usePageTransition();
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
    <>
      {!dimensions.width && (
        <div
          className={clsx(
            "bg-text transition-opacity z-10 duration-100 ease-linear",
            "fixed h-screen w-screen pointer-events-none opacity-100 left-0 top-0"
          )}
        />
      )}
      <motion.p
        className={clsx(
          "fixed select-none left-1/2 text-white top-1/2 -translate-y-1/2 text-5xl -translate-x-1/2 text-center z-20"
        )}
        {...anim(text)}
      >
        {routePath}
      </motion.p>
      {dimensions.width != null && <SVG {...dimensions} />}
      {children}
    </>
  );
}

const SVG = ({ height, width }) => {
  const initialPath = `
        M0 300 
        Q${width / 2} ${300 - width / 6} ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 300 + width / 6} 0 ${height + 300}
        L0 0
    `;

  const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `;

  return (
    <motion.svg
      {...anim(translate)}
      className={
        "fill-text fixed h-[calc(100vh+600px)] z-10 w-screen pointer-events-none left-0 top-0"
      }
    >
      <motion.path {...anim(curve(initialPath, targetPath))} />
    </motion.svg>
  );
};
