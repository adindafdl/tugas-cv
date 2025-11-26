// import React from "react";

const Profile = ({ profile, stats }) => {
  return (
    <div className="profile-card shadow p-4 rounded mb-4">
      <div className="d-flex align-items-center">
        <img
          src={profile.photo_url}
          className="rounded-circle me-4"
          alt="Foto"
          style={{
            width: "120px",
            height: "120px",
            objectFit: "cover",
            borderRadius: "8px"
        }}
        />

        <div>
          <h3 className="fw-bold text-white">{profile.full_name}</h3>
          <p className="text-light mb-2">{profile.headline}</p>

          <div className="d-flex flex-wrap gap-2">
            <span className="badge bg-light text-dark">{profile.nim}</span>
            <span className="badge bg-light text-dark">{profile.prodi}</span>
            <span className="badge bg-light text-dark">Angkatan {profile.angkatan}</span>
            <span className="badge bg-light text-dark">{stats.views_count} views</span>
          </div>
        </div>
      </div>

      <p className="text-white mt-3">{profile.short_bio}</p>

      <button className="btn btn-light mt-2">
        🔗 Visit Portfolio
      </button>
    </div>
  );
};

export default Profile;
