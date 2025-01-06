import React from "react";
import ToggleMode from "./ToggleMode";
import Link from "next/link";

const MainNav = () => {
  return (
    <div className="flex justify-between">
      <Link href="/">
        <h2 className="font-bold md:text-2xl">
          Anna-Rose <br />
          Wain
        </h2>
      </Link>
      <Link href="work">WORK</Link>
      <Link
        href="mailto:annarosewain9@gmail.com"
        className="menu-link contact-link"
      >
        <div className="link-text">CONTACT</div>
      </Link>
      <ToggleMode />
    </div>
  );
};

export default MainNav;
