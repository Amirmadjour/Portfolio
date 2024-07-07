"use client";
import Nav from "@/components/nav/Nav";
import Curve from "@/components/page/Curve";
import "@/styles/global.css";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import usePageTransition from "@/zustand/pageTransition";

const RootLayout = ({ children }) => {
  const { isTransitioning } = usePageTransition();
  const pathname = usePathname();
  return (
    <html lang="en">
      <body>
        <Nav />
        <AnimatePresence mode="wait">
          <Curve key={isTransitioning}>{children}</Curve>
        </AnimatePresence>
      </body>
    </html>
  );
};

export default RootLayout;
