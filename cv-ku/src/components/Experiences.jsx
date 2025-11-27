import React from "react";

const Experiences = ({ experiences }) => {
  return (
    <div className="card p-4 shadow mb-4">
      <h5 className="fw-bold mb-4">Experience</h5>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="timeline-item d-flex">
            
            {/* Circle icon */}
            <div className="timeline-icon">
              <i className="bi bi-briefcase"></i>
            </div>

            {/* Card content */}
            <div className="timeline-content p-3 shadow-sm">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <strong className="fs-5">{exp.title}</strong>
                  <div className="text-muted">{exp.company}</div>
                </div>

                <span className="badge type-badge text-capitalize">
                  {exp.type}
                </span>
              </div>

              {/* Date */}
              <div className="mt-2 text-muted small d-flex gap-2 align-items-center">
                <i className="bi bi-calendar"></i>
                <span>{exp.date}</span>
              </div>

              {/* Description */}
              <p className="mt-2 mb-2">{exp.description}</p>

              {/* Skills */}
              <div className="d-flex flex-wrap gap-2">
                {exp.skills?.map((skill, i) => (
                  <span key={i} className="badge skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
