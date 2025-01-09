import React from "react";

const Describer = ({ label, desc }) => {
  return (
    <div className="w-full h-fit flex flex-col gap-5">
      <p className="text-text_light text-sm">{label}</p>
      <div className="w-full h-[1px] bg-text_light"></div>
      <p className="text-lg">{desc}</p>
    </div>
  );
};

export default Describer;
