import LogoDot from "assets/logo/DDot.svg?url";
import LogoOrigin from "assets/logo/DLetterLogo.svg?url";
import classNames from "classnames";
import CVButton from "components/CVButton/CVButton";
import { AnchorDataList } from "components/utils";
import Image from "next/image";
import { useState } from "react";
import NavbarStyle from "./Navbar.module.scss";

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
          <div className={classNames(NavbarStyle.logoEffect)}>
            <Image
              src={LogoDot}
              width={3}
              height={3}
              className={classNames(
                NavbarStyle.firstDot,
                NavbarStyle.dotTransformAnimation,
                "absolute",
              )}
              alt="dot-1"
              unoptimized
            />
            <Image
              src={LogoOrigin}
              width={10}
              height={11}
              className={classNames(
                NavbarStyle.letter,
                NavbarStyle.transformAnimation,
                "absolute",
              )}
              alt="big-D"
              unoptimized
            />
            <Image
              src={LogoDot}
              width={3}
              height={3}
              className={classNames(
                NavbarStyle.secondDot,
                NavbarStyle.dotTransformAnimation,
                "absolute",
              )}
              alt="dot-2"
              unoptimized
            />
          </div>
        </div>
      </a>
      <CVButton />
      <div
        className={classNames(
          NavbarStyle.wrapper,
          "text-white bg-[--light-navy]",
          navbarOpen ? NavbarStyle.wrapper : "",
        )}
      >
        <ul>{AnchorDataList.map((item) => getMenuItem(item))}</ul>
      </div>
      <div
        className={classNames(
          NavbarStyle.hamMenuButton,
          "md:hidden ",
          navbarOpen ? NavbarStyle.menuChecked : "",
        )}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        <div className="hide-des">
          <span className={classNames(NavbarStyle.menuLine)}></span>
          <span className={classNames(NavbarStyle.menuLine)}></span>
          <span className={classNames(NavbarStyle.menuLine)}></span>
          <span className={classNames(NavbarStyle.menuLine)}></span>
          <span className={classNames(NavbarStyle.menuLine)}></span>
          <span className={classNames(NavbarStyle.menuLine)}></span>
        </div>
      </div>
    </nav>
  );
}
