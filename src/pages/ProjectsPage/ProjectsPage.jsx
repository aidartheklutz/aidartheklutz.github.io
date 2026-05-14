import React from "react";
import NavBar from "../../components/NavBar";
import "./ProjectsPage.css";

import MemoMate from "./covers/MemoMate.png";
import TSITools from "./covers/TSITools.png";
import PlanetProfile from "./covers/PlanetProfile.png";
import SpectrumND from "./covers/SpectrumND.png";

import { NavLink } from "react-router";

function ProjectsPage() {
  return (
    <>
      <NavBar />

      <div className="margin-wrapper">
        <h1 className="projects-title">My projects</h1>
        <div className="projects-grid">
          {/* =========================
              MEMOMATE
          ========================= */}

          <div className="project-box">
            <img
              className="project-cover"
              src={MemoMate}
              alt="MemoMate cover"
            />

            <div className="project-info">
              <p className="project-title">MemoMate</p>

              <p className="project-description">
                An app me and my friends built in less than 9 hours for a social
                impact hackathon. It has functions to assist people with memory
                issues (e.g., dementia, Alzheimer's disease).
              </p>

              <NavLink to="/projects/MemoMate" className="link-button">
                <p>Learn more</p>
              </NavLink>
            </div>
          </div>

          {/* =========================
              TSI TOOLS
          ========================= */}

          <div className="project-box">
            <img
              className="project-cover"
              src={TSITools}
              alt="TSI Tools cover"
            />

            <div className="project-info">
              <p className="project-title">TSI Tools</p>

              <p className="project-description">
                A small website I created to help my schoolmates at Technical
                School of Innovation (it's in Bishkek). It is a simple, yet
                useful toolkit to help students navigate their daily routines.
              </p>

              <NavLink to="/projects/TSITools" className="link-button">
                <p>Learn more</p>
              </NavLink>
            </div>
          </div>

          {/* =========================
              PLANET PROFILE
          ========================= */}

          <div className="project-box">
            <img
              className="project-cover"
              src={PlanetProfile}
              alt="Planet Profile cover"
            />

            <div className="project-info">
              <p className="project-title">Planet Profile</p>

              <p className="project-description">
                A collection of self-written articles about different planets of
                the Solar System and beyond. Nothing special, just a passion
                project, which I hope will find its audience among astronomy
                enthusiasts.
              </p>

              <NavLink to="/projects/PlanetProfile" className="link-button">
                <p>Learn more</p>
              </NavLink>
            </div>
          </div>

          {/* =========================
              SPECTRUM ND
          ========================= */}

          <div className="project-box">
            <img
              className="project-cover"
              src={SpectrumND}
              alt="SpectrumND cover"
            />

            <div className="project-info">
              <p className="project-title">SpectrumND</p>

              <p className="project-description">
                An Instagram page educating the Russian-speaking community about
                neurodivergent conditions. Growing it is quite difficult,
                however I am determined to make the world a better place.
              </p>

              <NavLink to="/projects/SpectrumND" className="link-button">
                <p>Learn more</p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectsPage;
