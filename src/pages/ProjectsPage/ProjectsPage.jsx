import React from "react";
import NavBar from "../../components/NavBar";
import "./ProjectsPage.css";
import MemoMate from "./covers/MemoMate.png";
import TSITools from "./covers/TSITools.png";
import PlanetProfile from "./covers/PlanetProfile.png";
import SpectrumND from "./covers/SpectrumND.png";
import { NavLink } from "react-router";

function ProjectsPage(props) {
  return (
    <>
      <NavBar />
      <div className="margin-wrapper">
        <div className="projects-grid">
          <div className="project-box">
            <div className="project-info">
              <div className="project-top">
                <img className="project-cover" src={MemoMate} />
                <p className="project-title">MemoMate</p>
              </div>
              <p>
                An app me and my friends built in less than 9 hours for a social
                impact hackathon. It has functions to assist people with memory
                issues (e.g., dementia, Alzheimer's disease).
              </p>
            </div>
            <NavLink to="/projects/MemoMate" className="link-button">
              <p>Learn more</p>
            </NavLink>
          </div>
          <div className="project-box">
            <div className="project-info">
              <div className="project-top">
                <img className="project-cover" src={TSITools} />
                <p className="project-title">TSI Tools</p>
              </div>
              <p>
                A small website I created to help my schoolmates at Technical
                School of Innovation (it's in Bishkek). It has some simple, yet
                useful functions to help students with their daily tasks.
              </p>
            </div>
            <NavLink to="/projects/TSITools" className="link-button">
              <p>Learn more</p>
            </NavLink>
          </div>
          <div className="project-box">
            <div className="project-info">
              <div className="project-top">
                <img className="project-cover" src={PlanetProfile} />
                <p className="project-title">Planet Profile</p>
              </div>
              <p>
                A collection of self-written articles about different planets of
                the Solar System and beyond. Nothing special, just a passion
                project, which I hope will find its audience among astronomy
                enthusiasts.
              </p>
            </div>
            <NavLink to="/projects/PlanetProfile" className="link-button">
              <p>Learn more</p>
            </NavLink>
          </div>
          <div className="project-box">
            <div className="project-info">
              <div className="project-top">
                <img className="project-cover" src={SpectrumND} />
                <p className="project-title">SpectrumND</p>
              </div>
              <p>
                An Instagram page educating the Russian-speaking community about
                neurodivergent conditions. Growing it is quite difficult,
                however I am determined to make the world a better place.
              </p>
            </div>
            <NavLink to="/projects/SpectrumND" className="link-button">
              <p>Learn more</p>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectsPage;
