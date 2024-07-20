"use client";
import Project from "./Project";
import Modal from "./Modal";
import { useState } from "react";
import clsx from "clsx";
import projects from "@/public/json/projects.json";

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
        <h3 className="text-[14px] text-text_light self-start pb-5 lg:pb-10 md:px-20">
          Recent work
        </h3>
        {projects.map((project, index) => {
          return (
            <Project
              index={index}
              title={project.name}
              role={project.role}
              src={project.src}
              color={project.color}
              setModal={setModal}
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
