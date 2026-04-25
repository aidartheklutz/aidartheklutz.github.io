import React from "react";
import "../ProjectsPage.css";
import NavBar from "../../../components/NavBar";
import PlanetProfile from "../covers/PlanetProfile.png";

function PlanetProfilePage(props) {
  return (
    <>
      <NavBar />
      <div className="margin-wrapper">
        <div className="project-name">
          <h1>Planet Profile</h1>
        </div>
        <div className="project-profile">
          <div className="project-logo">
            <img src={PlanetProfile} style={{ borderRadius: 20 }} />
          </div>
        </div>
        <h1>WORK IN PROGRESS. DESCRIPTION COMING SOON.</h1>
      </div>
    </>
  );
}

export default PlanetProfilePage;
