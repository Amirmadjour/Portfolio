"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import clsx from "clsx";

/**
 * SplitText component that animates text by splitting it into characters
 * @param {string} text - The text to split and animate
 * @param {string} className - Additional CSS classes
 * @param {Object} animationOptions - Animation configuration
 * @param {number} animationOptions.duration - Animation duration in seconds
 * @param {number} animationOptions.stagger - Stagger delay between characters
 * @param {number} animationOptions.delay - Initial delay before animation starts
 * @param {string} animationOptions.ease - GSAP easing function
 */
export default function SplitText({
  text,
  className = "",
  animationOptions = {},
}) {
  const splitTextRef = useRef(null);

  const {
    duration = 0.8,
    stagger = 0.03,
    delay = 0.3,
    ease = "power3.out",
  } = animationOptions;

  useEffect(() => {
    if (!splitTextRef.current) return;

    // Split text into words
    const textContent = splitTextRef.current.textContent.trim();
    const words = textContent.split(" ");

    // Clear the original text
    splitTextRef.current.textContent = "";

    // Create word wrapper and character spans
    words.forEach((word, wordIndex) => {
      const wordWrapper = document.createElement("span");
      wordWrapper.style.display = "inline-block";
      wordWrapper.style.overflow = "hidden";
      wordWrapper.style.verticalAlign = "top";
      wordWrapper.style.paddingBottom = "0.4em"; 
      wordWrapper.style.lineHeight = "1.3"; 

      // Split word into characters
      const chars = Array.from(word).map((char) => {
        const charSpan = document.createElement("span");
        charSpan.style.display = "inline-block";
        charSpan.style.verticalAlign = "baseline";
        charSpan.textContent = char;
        return charSpan;
      });

      chars.forEach((char) => wordWrapper.appendChild(char));

      splitTextRef.current.appendChild(wordWrapper);

      // Add space between words (except after last word)
      if (wordIndex < words.length - 1) {
        const space = document.createTextNode(" ");
        splitTextRef.current.appendChild(space);
      }
    });

    // Get all character spans
    const chars = splitTextRef.current.querySelectorAll("span span");

    // Set initial state - characters slide up from below
    gsap.set(chars, {
      y: "100%",
      opacity: 0,
    });

    // Animate characters with stagger
    gsap.to(chars, {
      y: "0%",
      opacity: 1,
      duration,
      stagger,
      ease,
      delay,
    });
  }, [text, duration, stagger, delay, ease]);

  return (
    <p 
      ref={splitTextRef} 
      className={clsx(className)}
      style={{ lineHeight: "1.2", overflow: "visible" }}
    >
      {text}
    </p>
  );
}

