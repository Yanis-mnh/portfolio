import "../style/project.css";
import DetailleCarte from "./DetailleCarte";

interface ProjectProps {
  src: string;
  alt: string;
  project_title: string;
}
const Project: React.FC<ProjectProps> = ({ src, alt, project_title }) => {
  return (
    <div className="project">
      <img src={src} alt={alt} />
      <p>{project_title}</p>
      <DetailleCarte />
    </div>
  );
};
const ProjectPage = () => {
  return (
    <>
      <div className="main_activity">
        <div className="projects">
          <Project
            src="src/assets/img1.webp"
            alt="img snake"
            project_title="Snake compiler"
          />
          <Project
            src="src/assets/img2.webp"
            alt="img snake"
            project_title="Snake compiler"
          />
          <Project
            src="src/assets/img3.avif"
            alt="img snake"
            project_title="Snake compiler"
          />
          <Project
            src="src/assets/snake.png"
            alt="img snake"
            project_title="Snake compiler"
          />
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
