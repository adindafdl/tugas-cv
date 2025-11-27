import React from "react";

const Experiences = ({ experiences }) => {
  return (
    <div className="card p-4 shadow mb-4">
      <h5 className="fw-bold mb-4">Experience</h5>

      {experiences.map((exp, index) => (
        <div key={exp.id} className="d-flex gap-4 mb-4">
          
          {/* Timeline Icon + Line */}
          <div className="text-center">
            <div className="icon-circle">
              <i className="bi bi-briefcase"></i>
            </div>
            {index !== experiences.length - 1 && (
              <div className="experience-line" style={{ height: "95px" }}></div>
            )}
          </div>

          {/* Experience Card */}
          <div className="experience-item position-relative w-100">
            
            {/* Badge Type (Right Top) */}
            <span className={`experience-type-badge ${exp.type}`}>
              {exp.type}
            </span>

            <strong className="fs-5">{exp.title}</strong>
            <div className="text-muted">{exp.organization}</div>

            {/* Date */}
            <div className="mt-2 experience-date d-flex align-items-center gap-2">
              <i className="bi bi-calendar"></i> {exp.start_date} - {exp.end_date}
            </div>

            {/* Description */}
            <p className="mt-2 mb-2">{exp.description}</p>

            {/* Skills Tag */}
            <div className="d-flex flex-wrap gap-2 mt-2">
              {exp.skills.map((skill, i) => (
                <span key={i} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experiences;
