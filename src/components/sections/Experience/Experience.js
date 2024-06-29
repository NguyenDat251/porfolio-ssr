import classNames from "classnames";
import { useCallback, useState } from "react";
import "./Experience.module.scss";

const EXPERIENCE_SECTION = {
  GOT_IT: "got-it",
  SHOPEE: "shopee",
  JH: "jh",
};

const Skill = ({ skill }) => (
  <span className="rounded-full bg-teal-400/25 px-3 py-1 text-white hover:text-teal-300 cursor-pointer">
    {skill}
  </span>
);

const experienceData = [
  {
    title: "Front-end developer",
    id: EXPERIENCE_SECTION.GOT_IT,
    companyName: "Got It Vietnam",
    time: "Nov-2022 - present",
    p1: "Participate in the development of the educational website system.",
    p2: "The project I mainly work on is Studyboots. This is a whiteboard website. Students and professionals can interact directly by voice, chat, and drawing.",
    skills: [
      "ReactJs",
      "Typescript",
      "HTML",
      "CSS",
      "Javascript",
      "Jest",
      "Cypress",
    ],
  },
  {
    title: "Front-end developer",
    id: EXPERIENCE_SECTION.SHOPEE,
    companyName: "Shopee Vietnam",
    time: "Jul-2022 - Oct-2022",
    p1: "Develop and maintain operator websites with ReactJS, Redux, and Ant Design Library. Use Single-spa to build front-end micro-services.",
    p2: "Research React testing, unit test, and integration test. Working with SCRUM framework.",
    skills: ["ReactJs", "Typescript", "HTML", "CSS", "Javascript"],
  },
  {
    title: "Software developer",
    id: EXPERIENCE_SECTION.JH,
    companyName: "Journey Horizon",
    time: "Oct-2020 - Jun-2022",
    p1: "Working with marketplace website. Build Front-end with ReactJs and Back-end with NodeJs. Deploy website to AWS. Install and apply Voucherify, and many features using AWS services.",
    p2: "Meeting and communicating with customers in English.",
    skills: ["ReactJs", "HTML", "CSS", "Javascript", "NodeJs", "AWS"],
  },
  {
    title: "Front-end developer intern",
    id: EXPERIENCE_SECTION.LIEN_A,
    companyName: "Lien A",
    time: "Sep-2019 - May-2020",
    p1: "Build a web app with Nuxt.js framework for Front-end and NodeJs for Back-end.",
    p2: "Learn about Magento and build Front-end with CMS page builder tool.",
    skills: ["NuxtJs", "HTML", "CSS", "Javascript"],
  },
];

const DescriptionItem = ({ content }) => (
  <div className="flex">
    <span className="text-[--green] text-xl">-</span>
    <p className="ml-2">{content}</p>
  </div>
);

export default function Experience() {
  const [selectedCompanyIndex, setSelectedCompanyIndex] = useState(0);

  const handleSelectCompany = useCallback(
    (index) => setSelectedCompanyIndex(index),
    []
  );

  return (
    <>
      <h2 className="titleSection">My experiences</h2>
      <div className="flex flex-col md:flex-row px-0 md:px-8 max-w-full">
        <div
          id="companyList"
          className="companyList flex md:flex-col pr-5 max-w-full overflow-x-scroll md:overflow-visible"
        >
          {experienceData.map((experience, index) => (
            <button
              key={experience.companyName}
              className={classNames(
                "h-12 hover mb-1 px-5 py-2 border-b md:border-l md:border-b-0 md:text-left hover:bg-[--light-navy] whitespace-nowrap",
                selectedCompanyIndex === index
                  ? "text-[--green] border-b-[--green] lg:border-l-[--green]"
                  : "border-l-[--lightest-navy]"
              )}
              onClick={() => handleSelectCompany(index)}
            >
              {experience.companyName}
            </button>
          ))}
        </div>
        <div className="pt-2">
          <p className="text-[--green] text-2xl font-semibold">
            {experienceData[selectedCompanyIndex].title}
          </p>
          <p className="mb-5">{experienceData[selectedCompanyIndex].time}</p>
          <DescriptionItem content={experienceData[selectedCompanyIndex].p1} />
          <DescriptionItem content={experienceData[selectedCompanyIndex].p2} />
          <div className="flex gap-2 flex-wrap mt-5">
            {experienceData[selectedCompanyIndex].skills.map((skill) => (
              <Skill key={skill} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
