// import React from "react";
// import Profile from "./components/Profile";
// import Skills from "./components/Skills";
// import Experiences from "./components/Experiences";
// import dataMahasiswa from "./dataMahasiswa.json";

// const App = () => {
//   return (
//     <div className="container mt-4">
//       <Profile data={dataMahasiswa} />
//       <Skills data={dataMahasiswa} />
//       <Experiences data={dataMahasiswa} />
//     </div>
//   );
// };

// export default App;
import React from "react";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import dataMahasiswa from "./dataMahasiswa.json";

const App = () => {
  return (
    <div className="container mt-4">
      <Profile profile={dataMahasiswa.profile} />
      <Skills skills={dataMahasiswa.skills} />
      <Experiences experiences={dataMahasiswa.experiences} />
    </div>
  );
};

export default App;
