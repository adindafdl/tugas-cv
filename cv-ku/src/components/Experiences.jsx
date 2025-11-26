import React from "react";

const Experiences = ({ experiences }) => {
  return (
    <div className="card p-3 mb-3">
      <h3>Pengalaman</h3>
      {experiences.map(exp => (
        <div key={exp.id} className="mb-2">
          <strong>{exp.title}</strong> — {exp.organization}  
          <br />
          <small>{exp.start_date} → {exp.end_date}</small>
          <p>{exp.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Experiences;
