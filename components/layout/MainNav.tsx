import React from "react";
import ToggleMode from "./ToggleMode";
import Link from "next/link";

const MainNav = () => {
  return (
    <div className="flex justify-between m-3 lg:m-5">
      <div className=" flex flex-1">
        <Link href="/">
          <h2 className="font-bold text-xl md:text-2xl m-2">
            Anna-Rose <br />
            Wain
          </h2>
        </Link>
      </div>
      <div className="flex flex-1 justify-end items-center m-2 gap-3 lg:gap-20">
        <Link href="work" className="navbar-link">
          WORK
        </Link>
        <Link
          href="mailto:annarosewain9@gmail.com"
          className="menu-link contact-link"
        >
          <div className="navbar-link">CONTACT</div>
        </Link>
        <ToggleMode />
      </div>
    </div>
  );
};

export default MainNav;
