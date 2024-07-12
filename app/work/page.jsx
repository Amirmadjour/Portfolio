import Footer from "@/components/footer/Footer";
import ProjectSection from "@/components/project/ProjectSection";
import clsx from "clsx";

const Work = () => {
  return (
    <div className="w-screen h-fit flex flex-col">
      <div className="flex items-center justify-center w-screen h-screen">
        Work
      </div>
      <div
        className={clsx(
          "flex flex-col items-center justify-center shrink-0 w-screen h-fit text-text px-[25px]",
          "md:px-20"
        )}
      >
        <ProjectSection />
      </div>
      <Footer />
    </div>
  );
};

export default Work;
