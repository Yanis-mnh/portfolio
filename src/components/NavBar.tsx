import { useState } from "react";

const handel_click = (page: number) => {
  const test = is_page.map((i: boolean) => (i === true ? true : false));

  set_is_page(test);
  console.log(test);
};

const [is_page, set_is_page] = useState([true, false, false]);
console.log(is_page);
function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          About
          <div
            className={is_page[0] ? "active_page" : "unactive_page"}
            onClick={() => {
              handel_click(0);
            }}
          ></div>
        </li>
        <li>
          Contact
          <div
            className={is_page[1] ? "active_page" : "unactive_page"}
            onClick={() => {
              handel_click(1);
            }}
          ></div>
        </li>
        <li>
          Project
          <div
            className={is_page[2] ? "active_page" : "unactive_page"}
            onClick={() => {
              handel_click(2);
            }}
          ></div>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
