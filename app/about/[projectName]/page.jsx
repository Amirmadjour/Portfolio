import projectsData from "@/public/json/projects.json";

export async function generateStaticParams() {
  // Return an array of possible params objects
  console.log(projectsData);
  return projectsData.map((project) => ({
    projectName: project.name,
  }));
}

const Page = ({ params }) => {
  const project = projectsData.find(
    (project) => project.name === params.projectName
  );
  console.log("params: ", params);
  if (!project)
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        Case study was not found
      </div>
    );

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      {project.name}
      {project.content}
    </div>
  );
};

export default Page;
