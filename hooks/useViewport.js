"use client";
import { useState, useEffect } from "react";

/**
 * Custom hook to detect viewport width and determine device type
 * @returns {Object} { width, isMobile, isTablet, isDesktop, deviceType }
 */
export function useViewport() {
  const [viewport, setViewport] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    deviceType: "desktop", // default to desktop for SSR
  });

  useEffect(() => {
    // Function to update viewport state
    const updateViewport = () => {
      const width = window.innerWidth;
      
      // Breakpoints matching Tailwind config
      // Mobile: < 768px (below md)
      // Tablet: 768px - 1023px (md to lg-1)
      // Desktop: >= 1024px (lg and above)
      const isMobile = width < 768;
      const isTablet = width >= 768 && width < 1024;
      const isDesktop = width >= 1024;

      let deviceType = "desktop";
      if (isMobile) deviceType = "mobile";
      else if (isTablet) deviceType = "tablet";

      setViewport({
        width,
        isMobile,
        isTablet,
        isDesktop,
        deviceType,
      });
    };

    // Set initial viewport
    updateViewport();

    // Add event listener for window resize
    window.addEventListener("resize", updateViewport);

    // Cleanup
    return () => {
      window.removeEventListener("resize", updateViewport);
    };
  }, []);

  return viewport;
}

