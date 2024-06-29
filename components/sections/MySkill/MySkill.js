import MySkillStyles from "./MySkill.module.scss";
import classNames from "classnames";
export default function MySkill() {
  const softwareSkills = ["VSCode", "Github"];
  const softSkills = [
    "Communicative",
    "Collaborative",
    "Critical Thinking",
    "Self learning",
    "English Fluency",
    "Problem Solving",
  ];
  const technologies = [
    "ReactJS",
    "HTML, CSS",
    "JavaScript",
    "TypeScript",
    "Jest",
    "Cypress",
    "VueJS",
    "Git",
    "Tailwind",
  ];
  return (
    <>
      <h2 className={MySkillStyles.titleSection}>My skill</h2>
      <span className={MySkillStyles.cardHeader}>Technologies</span>
      <div className={MySkillStyles.cardContainer}>
        {technologies.map((technology, index) => (
          <div
            key={index}
            className={classNames(MySkillStyles.card, "cursor-pointer")}
          >
            <span className={MySkillStyles.titleCard}>{technology}</span>
            <div className={MySkillStyles.bar}>
              <div className={MySkillStyles.emptybar}></div>
              <div className={MySkillStyles.filledbar}></div>
            </div>
          </div>
        ))}
      </div>
      <span className={MySkillStyles.cardHeader}>Softskills</span>
      <div className={MySkillStyles.cardContainer}>
        {softSkills.map((softSkill, index) => (
          <div
            key={index}
            className={classNames(MySkillStyles.card, "cursor-pointer")}
          >
            <span className={MySkillStyles.titleCard}>{softSkill}</span>
            <div className={MySkillStyles.bar}>
              <div className={MySkillStyles.emptybar}></div>
              <div className={MySkillStyles.filledbar}></div>
            </div>
          </div>
        ))}
      </div>
      <span className={MySkillStyles.cardHeader}>Software/Platform</span>
      <div className={MySkillStyles.cardContainer}>
        {softwareSkills.map((softwareSkill, index) => (
          <div
            key={index}
            className={classNames(MySkillStyles.card, "cursor-pointer")}
          >
            <span className={MySkillStyles.titleCard}>{softwareSkill}</span>
            <div className={MySkillStyles.bar}>
              <div className={MySkillStyles.emptybar}></div>
              <div className={MySkillStyles.filledbar}></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
