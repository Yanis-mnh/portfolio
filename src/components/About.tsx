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
        <div className="div3_education">
          <h2>Education</h2>
          Master's Degree in Systèmes d'Information et Données University Name |
          2024 - Present Focus on information systems, data analysis, and
          software development. Bachelor's Degree in Computer Systems University
          Name | Completed in 2024 Graduated without any retakes; final project:
          Intelligent Video Game for Children.
        </div>
      </div>
    </>
  );
};

export default About;
