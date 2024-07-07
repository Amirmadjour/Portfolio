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

export default function Curve({ children, backgroundColor }) {
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
    <div
      className="fixed h-[calc(100vh+600px)] w-screen pointer-events-none left-0 top-0"
      style={{ backgroundColor }}
    >
      <div
        style={{ opacity: dimensions.width == null ? 1 : 0 }}
        className={clsx(
          "bg-black transition-opacity duration-100 ease-linear",
          "fixed h-[calc(100vh+600px)] w-screen pointer-events-none left-0 top-0"
        )}
      />
      <motion.p
        className="absolute left-1/2 text-white top-[25%] text-5xl -translate-x-1/2 text-center z-10"
        {...anim(text)}
      >
        {routePath}
      </motion.p>
      {dimensions.width != null && <SVG {...dimensions} />}
      {children}
    </div>
  );
}

const SVG = ({ height, width }) => {
  const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
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
        "fixed h-[calc(100vh+600px)] w-screen pointer-events-none left-0 top-0"
      }
    >
      <motion.path {...anim(curve(initialPath, targetPath))} />
    </motion.svg>
  );
};
