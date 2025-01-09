"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";
import "./styles/ImageSlider.css";

const ImageViewer = ({ images }) => {
  const [viewer, setViewer] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const cancel = () => {
    setViewer(false);
  };

  const showView = () => {
    setViewer(true);
  };

  function showNextImage() {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  }

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="relative w-[700px] aspect-square">
        <Image
          onClick={showView}
          src={
            process.env.NODE_ENV !== "production"
              ? `/images/${images[0]}`
              : `/Portfolio/images/${images[0]}`
          }
          className={clsx(
            "absolute top-[250px] left-[50px] w-[400px] aspect-square rounded-[20px] bg-text_light shadow-xl object-cover cursor-pointer"
          )}
          width={300}
          height={0}
          alt=""
        ></Image>
        <Image
          onClick={showView}
          src={
            process.env.NODE_ENV !== "production"
              ? `/images/${images[1]}`
              : `/Portfolio/images/${images[1]}`
          }
          className={clsx(
            "absolute top-[50px] left-[250px] w-[400px] aspect-square rounded-[20px] bg-text_light shadow-xl object-cover cursor-pointer"
          )}
          width={300}
          height={0}
          alt=""
        ></Image>
      </div>

      {viewer && (
        <div className="z-[999] fixed top-0 left-0 h-screen w-screen bg-transparent p-5">
          <button
            className={clsx(
              "absolute z-10 top-10 right-10 bg-[#ffffffCC] w-10 h-10 flex items-center justify-center rounded-full",
              "text-text"
            )}
            onClick={cancel}
          >
            <X />
          </button>
          <div className="w-full h-full flex overflow-hidden relative">
            {images.map((img, index) => (
              <Image
                key={img}
                src={
                  process.env.NODE_ENV !== "production"
                    ? `/images/${img}`
                    : `/Portfolio/images/${img}`
                }
                alt=""
                aria-hidden={imageIndex !== index}
                className="img-slider-img rounded-xl"
                width={300}
                height={0}
                style={{ translate: `${-100 * imageIndex}%` }}
              />
            ))}
            <button
              onClick={showPrevImage}
              className="img-slider-btn left-5"
              aria-label="View Previous Image"
            >
              <ChevronLeft
                className="fill-none stroke-text"
                aria-hidden
              />
            </button>
            <button
              onClick={showNextImage}
              className="img-slider-btn right-5"
              aria-label="View Next Image"
            >
              <ChevronRight
                className="fill-none stroke-text"
                aria-hidden
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageViewer;
