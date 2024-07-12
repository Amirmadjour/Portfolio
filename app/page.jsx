"use client";
import Image from "next/image";
import hero_image from "@/public/images/nature-lake.jpg";
import { motion } from "framer-motion";
import DelayedLink from "@/components/nav/DelayedLink";
import Footer from "@/components/footer/Footer";
import ProjectSection from "@/components/project/ProjectSection";
import clsx from "clsx";

const Home = () => {
  return (
    <div className="flex flex-col w-full h-fit overflow-y-scroll overflow-x-hidden">
      <div className="absolute top-0 left-0 -z-10 w-screen h-screen">
        <Image
          src={hero_image}
          layout="fill"
          style={{ objectFit: "cover" }}
          alt="a picture of me"
        />
      </div>
      <div className="flex flex-col -z-10 items-center justify-center w-screen h-screen text-white">
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: "0" }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="relative w-fit h-fit"
        >
          <h1 className="text-[14.6vw] text-center w-screen select-none text-nowrap">
            Madjour Amir -
          </h1>
          <h1 className="text-[14.6vw] text-center absolute w-screen top-0 inline-block left-full select-none max-w-full text-nowrap">
            Madjour Amir -
          </h1>
        </motion.div>
        <h2 className="text-[40px] leading-none font-medium">
          Full stack developer
        </h2>
      </div>
      <div
        className={clsx(
          "flex flex-col items-center justify-center shrink-0 w-screen h-fit text-text px-20",
          "max-md:px-[25px]"
        )}
      >
        <div
          className={clsx(
            "flex w-full h-fit items-center justify-between px-20 py-[150px]",
            "max-lg:flex-col max-lg:px-10 max-md:px-0 max-lg:gap-10 max-md:py-[100px]"
          )}
        >
          <p className={clsx("w-2/3 text-4xl", "max-lg:w-full max-md:text-lg")}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium voluptates alias nulla veritatis dignissimos.
            Necessitatibus beatae illum amet tempore voluptate velit magni,
            quasi hic cumque adipisci id doloribus perspiciatis commodi.
          </p>
          <DelayedLink
            href="/about"
            className="border border-text_light rounded-full px-10 py-[30px] text-xl"
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
