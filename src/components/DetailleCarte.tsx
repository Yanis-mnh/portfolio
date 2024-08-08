interface DetailleCarteProps {
  description: string;
  technologis: string;
  link: string;
}

const DetailleCarte: React.FC<DetailleCarteProps> = ({
  description,
  technologis,
  link,
}) => {
  return (
    <>
      <div className="detaille">
        <p>
          <b>Description: </b> {description}
        </p>
        <p>
          <b>Technologies:</b> {technologis}
        </p>
        <a href={link}>
          <b>link: </b>
          {link}
        </a>
      </div>
    </>
  );
};

export default DetailleCarte;
