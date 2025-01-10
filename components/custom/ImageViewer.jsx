"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import "./styles/ImageSlider.css";

const ImageViewer = ({ images }) => {
  const [viewer, setViewer] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [imagePosition, setImagePosition] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });

  const cancel = () => {
    setViewer(false);
  };

  const showView = (index, event) => {
    // Get the position and size of the clicked image
    const rect = event.target.getBoundingClientRect();
    setImagePosition({
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
    });

    setViewer(true);
    setImageIndex(index);
  };

  const showNextImage = () => {
    setImageIndex((index) => (index === images.length - 1 ? 0 : index + 1));
  };

  const showPrevImage = () => {
    setImageIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="relative w-[700px] aspect-square">
        {images.map((img, idx) => (
          <Image
            key={img}
            onClick={(event) => showView(idx, event)}
            src={
              process.env.NODE_ENV !== "production"
                ? `/images/${img}`
                : `/Portfolio/images/${img}`
            }
            className={clsx(
              idx === 0
                ? "absolute top-[30%] left-[10%]"
                : "absolute top-[10%] left-[30%]",
              "w-[60%] aspect-square rounded-[20px] bg-text_light shadow-xl object-cover cursor-pointer"
            )}
            width={300}
            height={0}
            alt=""
          />
        ))}
      </div>

      <AnimatePresence>
        {viewer && (
          <motion.div
            key="viewer-overlay"
            className="z-[999] fixed top-0 left-0 h-screen w-screen bg-black/80 p-5 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close Button */}
            <motion.button
              className={clsx(
                "absolute z-10 top-10 right-10 bg-[#ffffffCC] w-10 h-10 flex items-center justify-center rounded-full",
                "text-text"
              )}
              onClick={cancel}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="text-text"/>
            </motion.button>

            {/* Image Slider */}
            <motion.div
              key="image-slider"
              className="w-full h-full flex overflow-hidden relative items-center justify-center"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              {images.map((img, index) => (
                <motion.div
                  key={img}
                  initial={{
                    translateX: `${(index - imageIndex) * 100}%`,
                  }}
                  animate={{
                    translateX: `${(index - imageIndex) * 100}%`,
                  }}
                  exit={{
                    translateX: `${(index - imageIndex) * 100}%`,
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute w-full h-full flex justify-center items-center"
                >
                  <Image
                    src={
                      process.env.NODE_ENV !== "production"
                        ? `/images/${img}`
                        : `/Portfolio/images/${img}`
                    }
                    alt=""
                    className="rounded-xl"
                    width={1200}
                    height={0}
                  />
                </motion.div>
              ))}

              {/* Navigation Buttons */}
              <button
                onClick={showPrevImage}
                className="img-slider-btn left-5"
                aria-label="View Previous Image"
              >
                <ChevronLeft className="fill-none stroke-text" aria-hidden />
              </button>
              <button
                onClick={showNextImage}
                className="img-slider-btn right-5"
                aria-label="View Next Image"
              >
                <ChevronRight className="fill-none stroke-text" aria-hidden />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageViewer;
