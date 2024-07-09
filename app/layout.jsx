"use client";
import Nav from "@/components/nav/Nav";
import Curve from "@/components/page/Curve";
import "@/styles/global.css";
import { AnimatePresence } from "framer-motion";
import usePageTransition from "@/zustand/pageTransition";

const RootLayout = ({ children }) => {
  const { isTransitioning } = usePageTransition();
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col h-fit w-fit overflow-auto">
          <Nav />
          <AnimatePresence mode="wait">
            <Curve key={isTransitioning}>{children}</Curve>
          </AnimatePresence>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
