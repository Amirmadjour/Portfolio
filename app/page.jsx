"use client";
import DelayedLink from "@/components/nav/DelayedLink";
import Footer from "@/components/footer/Footer";
import ProjectSection from "@/components/project/ProjectSection";
import clsx from "clsx";
import CircularText from "@/components/ui/shadcn-io/circular-text";
import SplitText from "@/components/custom/SplitText";

import "@/styles/utils.css";

const Home = () => {
  return (
    <div className="relative flex flex-col w-full h-fit overflow-y-scroll overflow-x-hidden">
      <div
        className="absolute top-0 left-0 -z-50 w-screen h-screen overflow-hidden"
        style={{
          background:
            "radial-gradient(circle at bottom, rgba(255,255,255,1) 15%, rgba(225,230,255,1) 35%, rgba(8,53,255,1) 60%, rgba(0,0,0,1) 90%)",
        }}
      ></div>
      <div
        className="absolute top-0 left-0 -z-50 w-screen h-screen"
        style={{
          background:
            "linear-gradient(0deg,rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 50%)",
        }}
      ></div>

      <CircularText
        text="FULL STACK DEVELOPER · "
        onHover="speedUp"
        spinDuration={20}
        className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] !absolute left-0 top-[calc(100vh-100px)] md:top-[calc(100vh-220px)] md:left-[20px]"
      />

      <div className="flex flex-col -z-10 items-center justify-center w-screen h-screen">
        <SplitText
          text="I create feelings, I bring value, from ideas to reality"
          className={clsx(
            "px-[25px] text-center text-2xl md:text-4xl lg:text-5xl font-medium",
            "text-black"
          )}
        />
      </div>
      <div
        className={clsx(
          "flex flex-col items-center justify-center shrink-0 w-screen h-fit text-text px-[25px]",
          "md:px-20"
        )}
      >
        <div
          className={clsx(
            "flex w-full h-fit items-center justify-between px-20 py-[150px]",
            "max-lg:flex-col max-lg:px-10 max-md:px-0 max-lg:gap-10 max-md:py-[100px]"
          )}
        >
          <p className={clsx("lg:w-2/3 lg:text-4xl", "w-full text-md")}>
            {
              "Empowering brands to excel in the digital age. Together, we establish the new benchmark. Straightforward, consistently at forefront."
            }
          </p>
          <DelayedLink
            href="/about"
            className={clsx("button border-text_light")}
          >
            About me
          </DelayedLink>
        </div>
        <ProjectSection />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
