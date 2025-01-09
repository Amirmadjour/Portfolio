import React from "react";
import clsx from "clsx";

const Card = ({ number, label, desc }) => {
  return (
    <div
      className={clsx(
        "w-full h-fit flex flex-col items-center justify-center gap-5",
        "*:text-left *:w-full"
      )}
    >
      <p className="text-text_light text-[14px] leading-snug">{number}</p>
      <div className=" h-[1px] bg-text_light"></div>
      <h4 className="font-medium text-3xl">{label}</h4>
      <p className="h-fit text-lg">{desc}</p>
    </div>
  );
};

export default Card;
