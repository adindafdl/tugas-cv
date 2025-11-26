import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import dataMahasiswa from "./dataMahasiswa.json";

// const App = () => {
//   return (
//     <div className="container mt-4">
//       <Profile profile={dataMahasiswa.profile} />
//       <Skills skills={dataMahasiswa.skills} />
//       <Experiences experiences={dataMahasiswa.experiences} />
//     </div>
//   );
// };

// export default App;


function App() {
  return (
    <div className="container my-4">
      <Profile profile={dataMahasiswa.profile} stats={dataMahasiswa.statistics} />
      <Skills skills={dataMahasiswa.skills} />
      <Experiences experiences={dataMahasiswa.experiences} />
    </div>
  );
}

export default App;

