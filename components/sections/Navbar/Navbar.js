import React, { useState } from "react";
import classNames from "classnames";
import CVButton from "../../CVButton/CVButton";
import { AnchorDataList } from "../../utils";
import LogoOrigin from "../../../assets/logo/DLetterLogo.svg";
import LogoDot from "../../../assets/logo/DDot.svg";
import "./Navbar.module.scss";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const getMenuItem = (id) => (
    <li key={id}>
      <a href={`#${id}`} onClick={() => setNavbarOpen(false)}>
        {id}
      </a>
    </li>
  );

  return (
    <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-6 py-3 bg-[--navy] md:bg-transparent">
      <a
        className="text-[--green] text-4xl leading-5 font-bold inline-block py-2 uppercase"
        href="#"
      >
        <div className="w-12 h-12">
          <div className="logoEffect">
            <LogoDot className="absolute firstDot dot-transform-animation" />
            <LogoOrigin className="absolute letter transform-animation" />
            <LogoDot className="absolute secondDot dot-transform-animation" />
          </div>
        </div>
      </a>
      <CVButton />
      <div
        className={classNames(
          "wrapper text-white bg-[--light-navy]",
          navbarOpen ? "wrapperOpen" : ""
        )}
      >
        <ul>{AnchorDataList.map((item) => getMenuItem(item))}</ul>
      </div>
      <div
        className={classNames(
          "md:hidden hamMenuButton",
          navbarOpen ? "menuChecked" : ""
        )}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        <div className="hide-des">
          <span className="menu-line"></span>
          <span className="menu-line"></span>
          <span className="menu-line"></span>
          <span className="menu-line"></span>
          <span className="menu-line"></span>
          <span className="menu-line"></span>
        </div>
      </div>
    </nav>
  );
}
