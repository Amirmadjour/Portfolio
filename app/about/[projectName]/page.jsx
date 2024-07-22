import projectsData from "@/public/json/projects.json";
import clsx from "clsx";
import Link from "next/link";
import macBook from "@/public/images/other/macbook-NoCopyRight.jpg";
import Image from "next/image";
import DelayedLink from "@/components/nav/DelayedLink";

import "@/styles/utils.css";

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
          "sm:px-[65px] md:px-40"
        )}
      >
        {project.info.map(({ label, desc }) => (
          <div key={label} className="w-full h-fit flex flex-col gap-5">
            <p className="text-text_light text-sm">{label}</p>
            <div className="w-full h-[1px] bg-text_light"></div>
            <p className="text-lg">{desc}</p>
          </div>
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
      <div className="w-full flex flex-col gap-3 *:my-5">
        <Image
          src={
            process.env.NODE_ENV !== "production"
              ? `/images/${project.images[0]}`
              : `/Portfolio/images/${project.images[0]}`
          }
          className={clsx("w-full h-auto bg-text_light")}
          width={300}
          height={0}
          alt=""
        ></Image>
        <Image
          src={macBook}
          width={300}
          height={0}
          alt=""
          className="w-full h-auto object-contain"
        />
        <Image
          src={
            process.env.NODE_ENV !== "production"
              ? `/images/${project.images[1]}`
              : `/Portfolio/images/${project.images[1]}`
          }
          className={clsx("w-full h-auto bg-text_light")}
          width={300}
          height={0}
          alt=""
        ></Image>
        <Image
          src={macBook}
          width={300}
          height={0}
          alt=""
          className="w-full h-auto object-contain"
        />
        {project.includePhoneImages && (
          <div
            className={clsx(
              "w-full h-[50vw] flex gap-5 justify-evenly",
              "*:w-[30%] *:h-full *:bg-text_light *:rounded-md lg:my-32 lg:py-10",
              "sm:px-[65px] md:px-40"
            )}
          >
            {/* Those are images from the study case */}
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
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
