import { useEffect } from "react";
import "./PreloadBackground.module.css";
import DLogo from "../../assets/logo/DLogo.svg?url";
import Image from "next/image";

export default function PreloadBackground() {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".preloadWrapper").classList.add("hidden");
    }, 3450);
  }, []);

  return (
    <div className="preloadWrapper flex justify-center items-center w-screen h-screen bg-[--navy] z-[999] relative">
      <Image
        src={DLogo}
        alt="d-logo"
        className="preloard"
        width={100}
        height={100}
      />
    </div>
  );
}
