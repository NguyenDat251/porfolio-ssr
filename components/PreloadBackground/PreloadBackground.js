import { useEffect } from "react";
import "./PreloadBackground.module.css";
import DLogo from "assets/logo/DLogo.svg";

export default function PreloadBackground() {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".preloadWrapper").classList.add("hidden");
    }, 3450);
  }, []);

  return (
    <div className="preloadWrapper flex justify-center items-center w-screen h-screen bg-[--navy] z-[999] relative">
      <img src={DLogo} className="preloard" width={100} height={100} />
    </div>
  );
}
