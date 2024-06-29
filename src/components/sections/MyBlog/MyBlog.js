import { useCallback, useEffect, useRef } from "react";
import blog1Bg from "assets/blog1_bg.webp";

const THRESHOLD = 1;

export default function MyBlog() {
  const cardRef = useRef(null);

  const handleMouseEnter = useCallback((e) => {
    const { clientX, clientY, currentTarget } = e;
    const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

    const horizontal = (clientX - offsetLeft) / clientWidth;
    const vertical = (clientY - offsetTop) / clientHeight;

    const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
    const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

    cardRef.current.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
  }, []);

  const handleMouseLeave = useCallback((e) => {
    cardRef.current.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
  }, []);

  useEffect(() => {}, []);

  return (
    <div className="h-screen flex flex-col justify-center items-start w-full">
      <h2 className="titleSection">Pieces I&apos;ve written</h2>
      <div className="flex justify-center w-full">
        <a
          ref={cardRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          href="https://link.medium.com/rwDvkDP57xb"
          className="w-full bg-[--light-navy] p-6 rounded-md shadow-xl hover:shadow-[--lightest-navy]"
          style={{
            transition: "transform 0.1s ease",
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
        >
          <div
            className="bg-cover h-[300px] mb-4"
            style={{
              backgroundImage: `url(${blog1Bg})`,
            }}
          />
          <h3 className="text-[--green]">
            Build a color picker Chrome extension in 10 minutes
          </h3>
          <p className="">
            A simple tutorial on how to create a color picker Chrome&apos;s
            extension
          </p>
          <span className="text-xs">
            *note: You have to fake ip in order to access Medium
          </span>
        </a>
      </div>
    </div>
  );
}
