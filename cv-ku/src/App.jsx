import React from "react";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";

// Import JSON
import dataMahasiswa from "./dataMahasiswa.json";

const App = () => {
  return (
    <div className="container mt-4">
      <Profile name={dataMahasiswa.name} email={dataMahasiswa.email} />
      <Skills skills={dataMahasiswa.skills} />
      <Experiences experiences={dataMahasiswa.experiences} />
    </div>
  );
};

export default App;
