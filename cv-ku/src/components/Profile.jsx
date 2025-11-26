import React from "react";

export default function Profile() {
  return (
    <div className="card shadow p-4 mb-4">
      <div className="d-flex align-items-center">
        <img
          src="https://via.placeholder.com/120"
          alt="Profile"
          className="rounded-circle me-4"
          width="120"
          height="120"
        />

        <div>
          <h3 className="fw-bold text-primary">Adinda Putri Nur Fadila</h3>
          <p className="mb-1">Fullstack Web Developer | React & Django Enthusiast</p>

          <div className="d-flex flex-wrap gap-2">
            <span className="badge bg-primary">L200230257</span>
            <span className="badge bg-secondary">Teknik Informatika</span>
            <span className="badge bg-success">Angkatan 2023</span>
          </div>

          <p className="mt-2 text-muted">
            Surakarta, Jawa Tengah · 127 views<br />
            Mahasiswa UMS berminat pada pengembangan web fullstack.
          </p>

          <button className="btn btn-outline-primary btn-sm">Visit Portfolio</button>
        </div>
      </div>
    </div>
  );
}
