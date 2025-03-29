import projectsData from "@/public/json/projects.json";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import DelayedLink from "@/components/nav/DelayedLink";

import "@/styles/utils.css";
import ImageViewer from "@/components/custom/ImageViewer";
import Describer from "@/components/custom/Describer";
import Card from "@/components/custom/Card";

export async function generateStaticParams() {
  // Return an array of possible params objects
  return projectsData.map((project) => ({
    projectName: project.name,
  }));
}

const Page = ({ params }) => {
  const project = projectsData.find(
    (project) => project.name === params.projectName
  );

  const index = (projectsData.indexOf(project) + 1) % projectsData.length;
  const NextProject = projectsData[index];

  if (!project)
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        Case study was not found
      </div>
    );

  const phoneImages = project.phoneImages
    ? project.phoneImages.map((i) => ({
        src:
          process.env.NODE_ENV !== "production"
            ? `/images/${i}`
            : `/Portfolio/images/${i}`,
      }))
    : null;

  return (
    <div className="w-screen h-screen flex flex-col items-center gap-[10px]">
      <h1
        className={clsx(
          "w-full h-fit pt-[40vh] pb-[10vh] text-[calc(clamp(3.25em,7vw,8em)*0.875)]",
          "px-[25px] sm:px-[65px] md:px-40"
        )}
      >
        {project.name.toUpperCase()}
      </h1>
      <div
        className={clsx(
          "relative w-full h-fit flex flex-col gap-[50px] pb-20 lg:flex-row lg:gap-12",
          "px-[25px] sm:px-[65px] md:px-40"
        )}
      >
        {project.info.map(({ label, desc }) => (
          <Describer key={label} label={label} desc={desc} />
        ))}
        {project.link != null && (
          <Link
            href={project.link}
            target="_blank"
            className={clsx(
              "absolute w-36 top-[245px] right-[2vw] aspect-square rounded-full bg-primary text-background",
              "flex items-center justify-center"
            )}
          >
            Live site
          </Link>
        )}
      </div>
      <div
        className={clsx(
          "w-full flex flex-col gap-3 *:my-5 shrink-0 py-10",
          "px-[25px] sm:px-[65px] md:px-40"
        )}
      >
        <Describer label={"DESCRIPTION"} desc={project.describer} />
        <p className="text-2xl ">{project.description}</p>
        <ImageViewer images={project.images} />
        <Describer
          label={"KEY FEATURES & TECHNOLOGIES"}
          desc={project.describer}
        />
        {Object.entries(project.features).map(
          ([category, description], index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-center gap-5"
            >
              <span className="text-[32px] font-medium">{category}</span>
              <span>{description}</span>
            </div>
          )
        )}
        <div
          className={clsx(
            "w-full flex flex-col items-start justify-center gap-[30px] lg:flex-row"
          )}
        >
          {Object.entries(project.technologies).map(
            ([category, description], index) => (
              <Card
                key={index}
                number={"0" + (index + 1)}
                label={category}
                desc={description}
              />
            )
          )}
        </div>
        {project.includeVideo && (
          <div className="relative w-full h-auto">
            <Image
              src={
                process.env.NODE_ENV !== "production"
                  ? `/images/${project.platforme}`
                  : `/Portfolio/images/${project.platforme}`
              }
              width={300}
              height={0}
              alt=""
              className="w-full h-auto object-contain"
            />
            <video
              autoPlay
              muted
              loop
              className="absolute left-1/2 top-[8.5%] z-[1] w-[73.5%] -translate-x-1/2"
            >
              <source src={project.videoLink} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
        {project.includePhoneImages && (
          <div
            className={clsx(
              "w-full h-fit flex flex-col gap-5 justify-between",
              "lg:my-32 lg:py-10"
            )}
          >
            <Describer label={"RESPONSIVENESS"} desc={"Phone"} />
            <div
              className={clsx(
                "w-full h-fit flex flex-col sm:flex-row sm:*:w-[30%] gap-5 justify-between"
              )}
            >
              {/* Those are images from the study case */}
              {phoneImages.map((img, index) => (
                <img
                  key={index}
                  src={img.src}
                  className="border w-auto h-full rounded-md bg-text_light"
                  alt={`Image ${index}`}
                />
              ))}
            </div>
          </div>
        )}
        <Describer label={"CONCLUSION"} desc={project.describer} />
        <p className="text-2xl ">{project.description}</p>
      </div>
      <div className="relative flex flex-col items-center justify-center w-screen min-h-screen h-fit bg-text text-background gap-10">
        <DelayedLink
          href={`/about/${NextProject.name}`}
          transitionName={NextProject.name}
          className={clsx(
            "w-full h-fit flex flex-col justify-center items-center gap-5 px-[25px]",
            "sm:px-[65px] md:px-40"
          )}
        >
          <p className="">Next case</p>
          <p className="text-6xl">{NextProject.name}</p>
          <div className="w-full flex flex-col items-center justify-center gap-0">
            <Image
              src={
                process.env.NODE_ENV !== "production"
                  ? `/images/${NextProject.src}`
                  : `/Portfolio/images/${NextProject.src}`
              }
              className={clsx("w-[80%] h-[30vw] lg:w-[30%] lg:h-[12vw]")}
              width={300}
              height={0}
              alt=""
            />
            <div className="w-full h-[1px] bg-background_light"></div>
          </div>
        </DelayedLink>
        <DelayedLink className="button border-background_light" href={"/work"}>
          All work
        </DelayedLink>
        <div className="absolute bottom-0 text_s w-full text-center text-background">
          Designed and developed by{" "}
          <span className="font-semibold">Madjour Amir</span>
        </div>
      </div>
    </div>
  );
};

export default Page;
