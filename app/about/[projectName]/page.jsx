import projectsData from "@/public/json/projects.json";
import clsx from "clsx";
import Link from "next/link";
import macBook from "@/public/images/macbook-NoCopyRight.jpg";
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
    <div className="w-screen h-screen flex flex-col items-center px-[25px] gap-[10px]">
      <h1 className="w-full h-fit pt-[40vh] pb-[10vh] text-5xl">
        {project.name.toUpperCase()}
      </h1>
      <div className="relative w-full h-fit flex flex-col gap-[50px] pb-20">
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
        <div className="w-full h-[400px] bg-text_light"></div>
        <Image
          src={macBook}
          width={300}
          height={0}
          alt=""
          className="w-full h-auto object-contain"
        />
        <div className="w-full h-[400px] bg-text_light"></div>
        <Image
          src={macBook}
          width={300}
          height={0}
          alt=""
          className="w-full h-auto object-contain"
        />
        <div
          className={clsx(
            "w-full h-[50vw] flex gap-5 justify-evenly",
            "*:w-[30%] *:h-full *:bg-text_light *:rounded-md"
          )}
        >
          {/* Those are images from the study case */}
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center w-screen min-h-screen h-fit bg-text text-background gap-10">
        <DelayedLink
          href={`/about/${NextProject.name}`}
          transitionName={NextProject.name}
          className={
            "w-full h-fit flex flex-col justify-center items-center gap-5 px-[25px]"
          }
        >
          <p className="">Next case</p>
          <p className="text-6xl">{NextProject.name}</p>
          <div className="w-full flex flex-col items-center justify-center gap-0">
            <Image
              src={"image"}
              className="w-[80%] h-[30vw]"
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
