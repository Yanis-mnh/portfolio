import "../style/About.css";
const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="div1_about_me">
          <p className="about_text">
            <h2>Hi, I'm Yanis</h2>a master's student in Information Systems and
            Data. With a strong passion for video game development and software
            creation, I enjoy turning complex problems into simple, elegant
            solutions.
          </p>
          <img className="logo_high" src="icons/logo_high.png" />
        </div>
        <div className="div2_skills">
          <h2>Skills</h2>
          <ul>
            <li>
              Programming Languages: HTML, CSS, JavaScript, PHP, React, C/C++,
              Java, GDScript, Python, Matlab.
            </li>
            <li>Tools & Technologies: AIVA, Zsh, Ubuntu, Git.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
