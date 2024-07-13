"use client";
import clsx from "clsx";
import DelayedLink from "../nav/DelayedLink";
import Image from "next/image";

export default function Project({
  index,
  title,
  src,
  role,
  color,
  href,
  transitionName,
  setModal,
}) {
  return (
    <DelayedLink
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      href={href}
      transitionName={transitionName}
      className={clsx(
        "flex w-full justify-between items-center px-[50px] py-[100px] cursor-pointer transition-all duration-200",
        "lg:hover:opacity-50 group border-t border-t-[rgb(201, 201, 201)] last-of-type:border-b last-of-type:border-b-[rgb(201, 201, 201)]",
        "max-md:flex-col max-md:px-0 max-md:py-5 max-lg:gap-5 "
      )}
    >
      <div
        className={clsx("h-auto w-full aspect-square", "md:hidden ")}
        style={{ backgroundColor: color }}
      >
        <Image
          className="h-auto w-full aspect-square object-contain"
          src={
            process.env.NODE_ENV !== "production"
              ? `/images/${src}`
              : `/Portfolio/images/${src}`
          }
          width={300}
          height={0}
          alt="image"
        />
      </div>
      <div className={clsx("flex items-center justify-between w-full h-fit")}>
        <h2
          className={clsx(
            "lg:group-hover:-translate-x-3 leading-none m-0 transition-all duration-[400ms] font-semibold",
            "text-[5vw] sm:text-4xl md:text-6xl lg:text-[100px] lg:font-normal"
          )}
        >
          {title}
        </h2>
        <p
          className={clsx(
            "transition-all lg:group-hover:translate-x-3 duration-[400ms]",
            "text-[5vw] xs:text-lg"
          )}
        >
          {role}
        </p>
      </div>
    </DelayedLink>
  );
}
