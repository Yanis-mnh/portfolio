import { ReactNode } from "react";
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
  return (
    <>
      <div className="main_activity" id="project">
        <div className="projects">
          <Project
            src="/portfolio/src/assets/snake.png"
            alt="img snake"
            project_title="test"
          >
            <DetailleCarte
              description="test"
              technologis="C, Godot 4"
              link="https://github.com/Yanis-mnh/Snake-compiler"
            />
          </Project>
          <Project
            src="src/assets/img2.webp"
            alt="img snake"
            project_title="Intelligent Video Game for Children"
          >
            <DetailleCarte
              description="A compiler for a virtual language named Snake."
              technologis="C, Godot 4"
              link="https://github.com/Yanis-mnh/Snake-compiler"
            />
          </Project>
          <Project
            src="src/assets/img3.avif"
            alt="img snake"
            project_title="Snake compiler"
          >
            <DetailleCarte description="" technologis="" link="" />
          </Project>
          <Project
            src="src/assets/snake.png"
            alt="img snake"
            project_title="Snake compiler"
          >
            <DetailleCarte description="" technologis="" link="" />
          </Project>

          <Project
            src="src/assets/snake.png"
            alt="img snake"
            project_title="Snake compiler"
          >
            <DetailleCarte description="" technologis="" link="" />
          </Project>

          <Project
            src="src/assets/snake.png"
            alt="img snake"
            project_title="Snake compiler"
          >
            <DetailleCarte description="" technologis="" link="" />
          </Project>

          <Project
            src="src/assets/snake.png"
            alt="img snake"
            project_title="Snake compiler"
          >
            <DetailleCarte description="" technologis="" link="" />
          </Project>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
