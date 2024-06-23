import "./MySkill.module.scss";
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
      <h2 className="titleSection">My skill</h2>
      <span className="card__header">Technologies</span>
      <div className="card__container">
        {technologies.map((technology, index) => (
          <div key={index} className="card cursor-pointer">
            <span className="titleCard">{technology}</span>
            <div className="bar">
              <div className="emptybar"></div>
              <div className="filledbar"></div>
            </div>
          </div>
        ))}
      </div>
      <span className="card__header">Softskills</span>
      <div className="card__container">
        {softSkills.map((softSkill, index) => (
          <div key={index} className="card cursor-pointer">
            <span className="titleCard">{softSkill}</span>
            <div className="bar">
              <div className="emptybar"></div>
              <div className="filledbar"></div>
            </div>
          </div>
        ))}
      </div>
      <span className="card__header">Software/Platform</span>
      <div className="card__container">
        {softwareSkills.map((softwareSkill, index) => (
          <div key={index} className="card cursor-pointer">
            <span className="titleCard">{softwareSkill}</span>
            <div className="bar">
              <div className="emptybar"></div>
              <div className="filledbar"></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
