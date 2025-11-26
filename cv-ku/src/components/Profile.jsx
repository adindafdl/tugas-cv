import React from "react";

const Profile = ({ profile }) => {
  return (
    <div className="card p-3 mb-3">
      <img src={profile.photo_url} width="120" style={{ borderRadius: "10px" }} alt="Foto" />
      <h2>{profile.full_name}</h2>
      <p><strong>NIM:</strong> {profile.nim}</p>
      <p><strong>Prodi:</strong> {profile.prodi}</p>
      <p><strong>Angkatan:</strong> {profile.angkatan}</p>
      <p>{profile.short_bio}</p>
      <p><strong>Lokasi:</strong> {profile.location}</p>
    </div>
  );
};

export default Profile;
