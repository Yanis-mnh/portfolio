function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          About
          <div className="active_page"></div>
        </li>
        <li>
          Contact
          <div className="active_page"></div>
        </li>
        <li>
          Project
          <div className="active_page"></div>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
