import { useEffect, useState } from "react";
import GoUpBtn from "./GoUpBtn";

const NavBar = () => {
  const [activePage, setActivePage] = useState([false, false, false]);

  const handleClick = (page: number) => {
    const newActivePage = activePage.map((_, index) => index === page);
    setActivePage(newActivePage);
    console.log(newActivePage);
  };

  const ScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    console.log(element);
  };
  const [isTop, setIsTop] = useState(true);
  useEffect(() => {
    const handelScroll = () => {
      if (window.scrollY > 0) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    };
    window.addEventListener("scroll", handelScroll);
    console.log(isTop);
    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);

  return (
    <>
      <nav id="navbar" className={isTop ? "isTop" : ""}>
        <ul className={isTop ? "isTop" : ""}>
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
