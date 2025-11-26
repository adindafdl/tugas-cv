import React from "react";

const Skills = ({ skills }) => {
const getPercentage = (level) => {
    switch (level.toLowerCase()) {
      case "main": return 100;
      case "expert": return 90;
      case "advanced": return 80;
      case "intermediate": return 60;
      case "beginner": return 40;
      default: return 50;
    }
  };
  return (
    <div className="card border-0 shadow p-4 mb-4">
      <h5 className="fw-bold mb-3">Skills & Expertise</h5>

      <div className="row g-4">
        {skills.map((skill) => {
            const percent = getPercentage(skill.level);
            return (
                <div key={skill.id} className="col-md-6">
                    <div className="p-3 border rounded">
                        <div className="d-flex align-items-center gap-3">
                            <img src={skill.icon_url} width="40" alt="" />
                            <div>
                                <strong>{skill.name}</strong>
                                <small className="text-muted d-block">
                                    {skill.years_of_experience} years experience
                                </small>
                            </div>
                        </div>

                        <div className="d-flex align-items-center gap-3">
                            <span className="fw-bold small" style={{ width: "45px" }}>
                                {percent}%
                            </span>
                            <div className="progress flex-grow-1" style={{ height: "6px" }}>
                            <div className="progress-bar" style={{ width: `${percent}%` }}></div>
                        </div>
                        <span
                            className="badge bg-primary"
                            style={{ width: "100px", textAlign: "center" }}>
                            {skill.level}
                        </span>
                    </div>
                </div>
            </div>
        );
        })}
      </div>
    </div>
  );
};

export default Skills;
