import React from "react";

const Profile = ({ profile, stats }) => {
  return (
    <div className="card p-4 shadow mb-4 rounded-4 border-0" style={{ background: "linear-gradient(90deg, #0099ff, #37c6ff)" }}>
      <div className="d-flex align-items-center gap-4">
        <img
          src={profile.photo_url}
          alt="Foto"
          style={{
            width: "150px",
            height: "150px",
            objectFit: "cover",
            borderRadius: "6px",
            boxShadow: "0px 3px 6px rgba(0,0,0,0.2)"
        }}
        />
        <div className="text-white w-100">
        <div className="d-flex justify-content-between align-items-center">
        <div>
          <h3 className="fw-bold mb-1">{profile.full_name}</h3>
          <p className="mb-1">{profile.headline}</p>
        

          <div className="d-flex flex-wrap gap-2 mb-1">
            <span className="badge bg-light text-dark">{profile.nim}</span>
            <span className="badge bg-light text-dark">{profile.prodi}</span>
            <span className="badge bg-light text-dark">Angkatan {profile.angkatan}</span>
          </div>
        </div>
      </div>
      <div className="d-flex mt-1 align-items-center gap-3 text-light opacity-75 small">
        <span><i className="bi bi-geo-alt"></i> {profile.location}</span>
        <span><i className="bi bi-eye"></i> {stats.views_count} views</span>
      </div>
      <p className="text-white mt-2">{profile.short_bio}</p>
      {profile.portfolio_url && (
        <a 
          href={profile.portfolio_url} 
          className="btn btn-light mt-2 fw-semibold"
          target="_blank"
        >
          <i className="bi bi-link-45deg"></i> Visit Portfolio
        </a>
      )}
    </div>
  </div>
</div>
  );
};

export default Profile;
