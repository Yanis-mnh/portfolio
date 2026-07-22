import { PropsWithChildren } from "react";
import { ModeToggle } from "../ModeToggle";
import Link from "next/link";
type ULProps = PropsWithChildren<{
  className?: string;
}>;

const liStyle = "cursor-pointer flex items-center font-semibold";

const UL = ({ children, className = "" }: ULProps) => {
  return (
    <ul
      className={`flex flex-row gap-5 justify-center items-center ${className}`}
    >
      {children}
    </ul>
  );
};

const NAVBAR_HEIGHT = "4rem";

const NavBar = () => {
  return (
    <nav
      className="grid grid-cols-3 items-center
     bg-primary/10 backdrop-blur-md
     px-4 sticky top-0 z-50 border-b border-border"
      style={{
        ["--navbar-height" as string]: NAVBAR_HEIGHT,
        height: NAVBAR_HEIGHT,
      }}
    >
      <UL className="justify-self-start">
        <li className="font-mono text-2xl font-bold select-none text-foreground">
          <span className="text-primary">&lt;</span>
          Yanix
          <span className="text-primary">/&gt;</span>
        </li>
      </UL>

      <UL className="justify-self-center gap-5 ">
        <Link
          className={`${liStyle} text-foreground hover:text-primary transition-colors`}
          href="#about"
        >
          About
        </Link>
        <Link
          className={`${liStyle} text-foreground hover:text-primary transition-colors`}
          href="#projects"
       >
          Projects
        </Link>
        <Link
          className={`${liStyle} text-foreground hover:text-primary transition-colors`}
          href="mailto:mounnah.yanis2002@gmail.com"
        >
          Contact
        </Link>
      </UL>

      <UL className="justify-self-end">
        <li>
          <ModeToggle />
        </li>
        {/* Add language changer */}
      </UL>
    </nav>
  );
};

export default NavBar;
