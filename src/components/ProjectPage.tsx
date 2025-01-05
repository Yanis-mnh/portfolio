import { ReactNode } from "react";
import projectsData from "../project.json";
import "../style/project.css";
import DetailleCarte from "./DetailleCarte";

interface ProjectProps {
  src: string;
  alt: string;
  project_title: string;
  children: ReactNode;
}
const Project: React.FC<ProjectProps> = ({
  src,
  alt,
  project_title,
  children,
}) => {
  return (
    <div className="project">
      <img src={src} alt={alt} />
      <p>{project_title}</p>
      {children}
    </div>
  );
};
const ProjectPage = () => {
  const baseUrl: string = import.meta.env.PUBLIC_URL;

  return (
    <>
      <div className="main_activity" id="project">
        <div className="projects">
          {projectsData.map((project, index) => (
            <Project
              key={index}
              src={baseUrl + project["image-src"]}
              alt={`${project.img_alt}`}
              project_title={project.title}
            >
              <DetailleCarte
                description={project.description}
                technologis={project.technologies}
                link={project.link}
              />
            </Project>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
