"use client";
import Image from "next/image";
import hero_image from "@/public/images/nature-lake.jpg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="flex flex-col w-full h-fit">
      <div className="fixed top-0 left-0 -z-10 w-screen h-screen">
        <Image
          src={hero_image}
          layout="fill"
          style={{ objectFit: "cover" }}
          alt="a picture of me"
        />
      </div>
      <div className="fixed top-0 left-0 flex flex-col items-center justify-center w-screen h-screen text-white">
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: "0" }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="relative w-fit h-fit "
        >
          <h1 className="text-[14.6vw] text-center w-screen select-none text-nowrap">
            Madjour Amir -
          </h1>
          <h1 className="text-[14.6vw] text-center absolute w-screen top-0 inline-block left-full select-none max-w-full text-nowrap">
            Madjour Amir -
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
