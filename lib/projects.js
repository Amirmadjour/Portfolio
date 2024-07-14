export async function getAllProjects() {
  const res = await fetch(
    `${process.env.NODE_ENV === "production" ? "portfolio" : ""}/projects.json`
  );
  const projects = await res.json();
  return projects;
}

export async function getProjectByName(name) {
  const projects = await getAllProjects();
  return projects.find((project) => project.name === name);
}
