import { useState } from "react";

const NavBar = () => {
  const [activePage, setActivePage] = useState([false, false, false]);

  const handleClick = (page: number) => {
    const newActivePage = activePage.map((_, index) => index === page);
    setActivePage(newActivePage);
    console.log(newActivePage);
  };
  const [test, set_test] = useState(false);
  return (
    <nav>
      <ul
        className={test ? "scroll" : ""}
        onClick={() => {
          set_test(!test);
        }}
      >
        <li onClick={() => handleClick(0)}>
          About
          <div
            className={activePage[0] ? "active_page" : "unactive_page"}
          ></div>
        </li>

        <li onClick={() => handleClick(2)}>
          Project
          <div
            className={activePage[2] ? "active_page" : "unactive_page"}
          ></div>
        </li>
        <li onClick={() => handleClick(1)}>
          Contact
          <div
            className={activePage[1] ? "active_page" : "unactive_page"}
          ></div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
