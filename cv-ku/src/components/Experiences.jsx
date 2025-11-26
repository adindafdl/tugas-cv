// Experiences.jsx

import React from "react";

const Experiences = () => {
  const experienceData = [
    {
      role: "Frontend Developer Internship",
      company: "PT Teknologi Nusantara",
      year: "2024",
      details: "Membuat tampilan dashboard berbasis ReactJS untuk internal perusahaan."
    },
    {
      role: "UI/UX Designer Freelance",
      company: "Project Website Portofolio",
      year: "2023",
      details: "Merancang desain antarmuka menggunakan Figma untuk website personal brand."
    }
  ];

  return (
    <div style={styles.container}>
      <h2>Experiences</h2>

      {experienceData.map((exp, index) => (
        <div key={index} style={styles.card}>
          <h3 style={styles.role}>{exp.role}</h3>
          <p><strong>{exp.company}</strong> — {exp.year}</p>
          <p style={styles.details}>{exp.details}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    width: "350px",
    margin: "auto",
    backgroundColor: "#f9f9f9",
  },
  card: {
    textAlign: "left",
    background: "#edf2f7",
    padding: "15px",
    borderRadius: "8px",
    marginTop: "15px"
  },
  role: {
    marginBottom: "5px"
  },
  details: {
    fontSize: "14px",
    color: "#555"
  }
};

export default Experiences;
