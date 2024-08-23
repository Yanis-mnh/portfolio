import { useState } from "react";
import "../style/About.css";
import Notify from "./Notify";

const About = () => {
  const [countre, SetCounter] = useState(0);
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
          <img
            onClick={() => HandelClickImg(countre, SetCounter)}
            className="logo_high"
            src="icons/logo_high.png"
          />
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

const HandelClickImg = (countre: number, SetCounter: CallableFunction) => {
  SetCounter(countre + 1);
  switch (countre) {
    case 3:
      Notify("I can see that you like the logo!", 3000);
      break;
    case 10:
      Notify("Okay, you love it, I got it!", 4000);
      break;
    case 15:
      Notify("You're really into this, huh?", 3500);
      break;
    case 20:
      Notify("Wow, it's becoming an obsession!", 5000);
      break;
    case 30:
      Notify("Are you trying to break the logo?", 4500);
      break;
    case 40:
      Notify("Please, you can stop now...", 6000);
      break;
    case 55:
      Notify("The logo appreciates your enthusiasm!", 5500);
      break;
    case 70:
      Notify("Sorry, but the logo can't love you back...", 7000);
      break;
    case 85:
      Notify("At this point, the logo should start paying you rent!", 8000);
      break;
    case 100:
      Notify("You're still here? Maybe try clicking something else?", 9000);
      break;
    case 120:
      Notify("You're determined, I'll give you that!", 10000);
      break;
    case 140:
      Notify("Alright, last warning: the logo is getting dizzy...", 11000);
      break;
    case 160:
      Notify(
        "Okay, you've officially won the 'Most Persistent Clicker' award!",
        12000
      );
      break;
  }
};

export default About;
