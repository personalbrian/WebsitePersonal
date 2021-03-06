import React from "react";
import AboutMe from "../components/AboutMe";
import Languages from "../components/Languages";
import Technologies from "../components/Technologies";
const HomePage = () => {
  return (
    <div>
      <AboutMe />
      <div className="tray-comp">
          <Languages/>
          <Technologies/>
      </div>
    </div>
  );
};

export default HomePage;
