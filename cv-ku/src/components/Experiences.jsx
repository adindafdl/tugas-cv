// import React from "react";

// const Experiences = ({ experiences }) => {
//   return (
//     <div className="card p-3 mb-3">
//       <h3>Pengalaman</h3>
//       {experiences.map(exp => (
//         <div key={exp.id} className="mb-2">
//           <strong>{exp.title}</strong> — {exp.organization}  
//           <br />
//           <small>{exp.start_date} → {exp.end_date}</small>
//           <p>{exp.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Experiences;

import React from "react";

const Experiences = ({ experiences }) => {
  return (
    <div className="card shadow p-4 border-0">
      <h5 className="fw-bold mb-4">Experience</h5>

      {experiences.map((exp) => (
        <div key={exp.id} className="border-bottom pb-3 mb-3 ">
            {exp.image_url && (
            <img 
              src={exp.image_url} 
              alt={exp.organization} 
              width="55"
              height="55"
              className="rounded"
              style={{ objectFit: "cover" }}
            />
          )}
          <h6 className="fw-bold">{exp.title}</h6>
          <p className="text-muted mb-1">{exp.organization}</p>

          <span className="badge bg-info text-dark mb-2">{exp.experience_type}</span>

          <p className="small">{exp.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Experiences;
