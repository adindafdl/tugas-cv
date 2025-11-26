import React from "react";

const Skills = ({ skills }) => {
  return (
    <div className="card p-3 mb-3">
      <h3>Skills</h3>
      <ul>
        {skills.map(skill => (
          <li key={skill.id}>
            {skill.name} ({skill.level})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
