import React from "react";

const HardSkillsTimeline = ({ skills }) => {
  return (
    <>
      {skills.map((item) => (
        <span
          className={`bg-${item.hardSkillsColor}-100 text-${item.hardSkillsColor}-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-${item.hardSkillsColor}-900 dark:text-${item.hardSkillsColor}-300`}
        ></span>
      ))}

      <p>item.hardSkills</p>
    </>
  );
};

export default HardSkillsTimeline;
