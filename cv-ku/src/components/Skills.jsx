// import React from "react";

// const Skills = ({ skills }) => {
//   return (
//     <div className="card p-3 mb-3">
//       <h3>Skills</h3>
//       <ul>
//         {skills.map(skill => (
//           <li key={skill.id}>
//             {skill.name} ({skill.level})
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Skills;

import React from "react";

const Skills = ({ skills }) => {
  return (
    <div className="card border-0 shadow p-4 mb-4">
      <h5 className="fw-bold mb-3">Skills & Expertise</h5>

      <div className="row g-4">
        {skills.map((skill) => (
          <div key={skill.id} className="col-md-6">
            <div className="p-3 border rounded d-flex flex-column">
              <div className="d-flex align-items-center gap-3">
                <img src={skill.icon_url} width="40" alt="" />
                <div>
                  <strong>{skill.name}</strong>
                  <div className="text-muted small">
                    {skill.years_of_experience} years experience
                  </div>
                </div>
              </div>

              <div className="progress mt-3" style={{ height: "6px" }}>
                <div
                  className="progress-bar"
                  style={{ width: skill.is_main ? "100%" : "66%" }}
                ></div>
              </div>

              <span className="badge bg-primary mt-2">
                {skill.is_main ? "Main" : skill.level}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
