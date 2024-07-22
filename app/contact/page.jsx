"use client";
import clsx from "clsx";

import "@/styles/utils.css";
import ContactDetails from "@/components/contact/ContactDetails";
import ContactForm from "@/components/contact/ContactForm";

const Contact = () => {
  return (
    <div className="w-screen h-fit flex flex-col px-[25px] bg-text text-background">
      <h2
        className={clsx(
          "font-normal text-[calc(clamp(3.25em,7vw,8em)*0.875)] leading-[1.1] py-[20vh] lg:py-[30vh]",
          "sm:px-[65px] md:px-40"
        )}
      >
        {"Let's team up to launch your project"}
      </h2>
      <div className="flex flex-col gap-5">
        <div
          className={clsx(
            "w-full h-fit flex flex-col items-center justify-center gap-10 lg:flex-row lg:items-start lg:gap-[5vw]",
            "sm:px-[65px] md:px-40"
          )}
        >
          <ContactForm />
          <ContactDetails />
        </div>
        <div className="w-full text_s text-center">
          Designed and developed by{" "}
          <span className="font-semibold">Madjour Amir</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
