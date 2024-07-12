"use client";
import Project from "./Project";
import Modal from "./Modal";
import { useState } from "react";
import clsx from "clsx";

const projects = [
  {
    title: "Madjria",
    src: "c2montreal.png",
    role: "Full stack development",
    href: "/about/madjria",
    transitionName: "Madjria",
    color: "#000000",
  },
  {
    title: "Majlis",
    src: "officestudio.png",
    role: "fontend development",
    href: "/about/majlis",
    transitionName: "Majlis",
    color: "#8C8C8C",
  },
  {
    title: "Locomotive",
    src: "locomotive.png",
    role: "fontend dev",
    href: "/about/madjria",
    transitionName: "Madjria",
    color: "#EFE8D3",
  },
  {
    title: "Silencio",
    src: "silencio.png",
    role: "fontend dev",
    href: "/about/madjria",
    transitionName: "Madjria",
    color: "#706D63",
  },
];

const ProjectSection = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <div className="flex flex-col w-full h-fit py-10">
      <div
        className={clsx(
          "w-full flex flex-col items-center justify-center",
          "sm:px-10 md:px-0"
        )}
      >
        <h3 className="text-[14px] text-text_light self-start pb-5 lg:pb-10">
          Recent work
        </h3>
        {projects.map((project, index) => {
          return (
            <Project
              index={index}
              title={project.title}
              role={project.role}
              src={project.src}
              setModal={setModal}
              href={project.href}
              transitionName={project.transitionName}
              key={index}
            />
          );
        })}
      </div>

      <Modal modal={modal} projects={projects} />
    </div>
  );
};

export default ProjectSection;
