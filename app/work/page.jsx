import Footer from "@/components/footer/Footer";
import ProjectSection from "@/components/project/ProjectSection";
import clsx from "clsx";

import "@/styles/utils.css";

const buttons = [{ label: "All" }, { label: "Desktop" }, { label: "Website" }];

const Work = () => {
  return (
    <div className="w-screen h-fit flex flex-col text-text items-center px-[25px]">
      <h2
        className={clsx(
          "font-normal text-[calc(clamp(3.25em,7vw,8em)*0.875)] leading-[1.1] py-[20vh]"
        )}
      >
        Developing cutting-edge digital products.
      </h2>
      <div
        className={clsx(
          "w-screen px-[25px] h-fit bottom-10 grid grid-flow-col justify-start gap-4",
          "px-[25px] sm:px-[65px] md:px-40"
        )}
      >
        {buttons.map(({ label }) => (
          <button key={label} className="font-normal button w-fit">
            {label}
          </button>
        ))}
      </div>
      <div
        className={clsx(
          "flex flex-col items-center justify-center shrink-0 w-screen h-fit text-text px-[25px]",
          "md:px-20 "
        )}
      >
        <ProjectSection />
      </div>
      <Footer />
    </div>
  );
};

export default Work;
