"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import usePageTransition from "@/zustand/pageTransition";

const routes = {
  "/": "Home",
  "/work": "Work",
  "/about": "About",
  "/contact": "Contact",
};

export default function DelayedLink({ fn, href, children, delay = 1000 }) {
  const router = useRouter();
  const { toggleToTransition, setRoutePath } = usePageTransition();
  const [isPending, setIsPending] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    if (fn) fn();
    setRoutePath(routes[href]);
    toggleToTransition();
    setIsPending(true);
    setTimeout(() => {
      router.push(href);
    }, delay); // delay in milliseconds
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      style={{ pointerEvents: isPending ? "none" : "auto" }}
    >
      {children}
    </Link>
  );
}
