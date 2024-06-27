import React from "react";
import CVButtonStyle from "./CVButton.module.scss";
import classNames from "classnames";

const DEFAULT_CV_LINK =
  "https://drive.google.com/file/d/1eEG1PpEWlFG_RHctqjrCxrz857o61b-7/view?usp=sharing";

export default function CVButton() {
  //workaroud for process not defined
  //https://stackoverflow.com/a/70791920
  const CV_LINK = process.env.REACT_APP_CV_LINK || DEFAULT_CV_LINK;

  return (
    <>
      <a
        className={classNames(CVButtonStyle.customBtn)}
        href={CV_LINK}
        target="_blank"
        rel="noopener noreferrer"
      >
        Check out my CV
      </a>
    </>
  );
}
