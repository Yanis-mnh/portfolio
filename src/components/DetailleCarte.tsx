interface DetailleCarteProps {
  description: string;
  technologis: string;
  link: string;
  linkName?: string;
}

const DetailleCarte: React.FC<DetailleCarteProps> = ({
  description,
  technologis,
  link,
  linkName = "GitHub repo",
}) => {
  return (
    <>
      <div className="detaille">
        <p>
          <b className="carte_title">Description: </b> {description}
        </p>
        <p>
          <b className="carte_title">Technologies:</b> {technologis}
        </p>
        <a href={link}>
          <b className="carte_title">link: </b>
          {linkName}
        </a>
      </div>
    </>
  );
};

export default DetailleCarte;
