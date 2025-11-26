// Skills.jsx

import React from "react";

const Skills = () => {
  const skillsList = [
    "HTML & CSS",
    "JavaScript",
    "ReactJS",
    "NodeJS",
    "MySQL",
    "UI/UX Basic"
  ];

  return (
    <div style={styles.container}>
      <h2>Skills</h2>

      <ul style={styles.list}>
        {skillsList.map((skill, index) => (
          <li style={styles.skillItem} key={index}>
            ⭐ {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    width: "300px",
    margin: "auto",
    backgroundColor: "#f9f9f9",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  skillItem: {
    margin: "8px 0",
    background: "#e2e8f0",
    padding: "8px",
    borderRadius: "5px"
  }
};

export default Skills;
