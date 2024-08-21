import "../style/About.css";
const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="div1_about_me">
          <div className="about_text">
            <h2>Hi, I'm Yanis</h2>
            <p>
              a master's student in Information Systems and Data. With a strong
              passion for video game development and software creation, I enjoy
              turning complex problems into simple, elegant solutions.
            </p>
          </div>
          <img className="logo_high" src="icons/logo_high.png" />
        </div>
        <div className="div2_skills">
          <h2>Skills</h2>
          <div className="skills-images">
            <img src="icons/langague/html.png" />
            <img src="icons/langague/css-3.png" />
            <img src="icons/langague/react.png" />
            <img src="icons/langague/python.png" />
            <img src="icons/langague/godot.png" />
            <img src="icons/langague/sql-server.png" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
