import { useState } from "react";
import GoUpBtn from "./GoUpBtn";

const NavBar = () => {
  const [activePage, setActivePage] = useState([false, false, false]);

  const handleClick = (page: number) => {
    const newActivePage = activePage.map((_, index) => index === page);
    setActivePage(newActivePage);
    console.log(newActivePage);
  };
  const [test, set_test] = useState(false);

  const ScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    console.log(element);
  };

  return (
    <>
      <nav id="navbar">
        <ul className={test ? "scroll" : ""}>
          <li
            onClick={() => {
              ScrollToSection("about");
              handleClick(0);
            }}
          >
            About
            <div
              className={activePage[0] ? "active_page" : "unactive_page"}
            ></div>
          </li>

          <li
            onClick={() => {
              handleClick(1);
              ScrollToSection("project");
              set_test(true);
            }}
          >
            Project
            <div
              className={activePage[1] ? "active_page" : "unactive_page"}
            ></div>
          </li>
          <li
            onClick={() => {
              handleClick(2);
              ScrollToSection("contact");
            }}
          >
            Contact
            <div
              className={activePage[2] ? "active_page" : "unactive_page"}
            ></div>
          </li>
        </ul>
      </nav>
      <GoUpBtn
        onButtonClick={ScrollToSection}
        changeNavActivePage={handleClick}
      />
    </>
  );
};

export default NavBar;
