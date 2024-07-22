import clsx from "clsx";
import Socials from "../footer/Socials";

const ContactDetails = () => {
  return (
    <div className="flex lg:flex-col lg:gap-[10vh] w-fit h-fit lg:items-center lg:justify-center lg:mt-10">
      <div
        className={clsx(
          "flex flex-col w-full h-fit text-base items-center justify-center gap-5",
          "*:w-full"
        )}
      >
        <h4 className="text-sm text-background_light text-left">
          Contact details
        </h4>
        <p className="text-base text-left">+213556326897</p>
        <p className="text-base text-left">amirmadjour133@gmail.com</p>
      </div>
      <div
        className={clsx(
          "flex flex-col w-full h-fit text-base items-center justify-center gap-5",
          "*:w-full"
        )}
      >
        <Socials />
        <div className=" h-[1px] bg-background_light"></div>
      </div>
    </div>
  );
};

export default ContactDetails;
