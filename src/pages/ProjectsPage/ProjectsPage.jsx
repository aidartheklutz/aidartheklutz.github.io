import React from "react";
import NavBar from "../../components/NavBar";
import "./ProjectsPage.css";

import { useLanguage } from "../../assets/setLanguage";
import { LANG } from "./LangProjectsPage";

import MemoMate from "./covers/MemoMate.png";
import TSITools from "./covers/TSITools.png";
import PlanetProfile from "./covers/PlanetProfile.png";
import SpectrumND from "./covers/SpectrumND.png";
import ActiveRecaller from "./covers/ActiveRecaller.png";
import WeatherNowKg from "./covers/WeatherNowKg.png";
import Academap from "./covers/Academap.png";

function ProjectsPage() {
  const [language, setLanguage] = useLanguage();
  const lang = LANG[language];

  const projects = [
    {
      title: "Active Recaller",
      image: ActiveRecaller,
      alt: "Active Recaller cover",
      description: lang.pdesc.activeRecaller,
      github: "https://github.com/aidartheklutz/active-recaller",
      open: "https://activerecaller.vercel.app",
    },
    {
      title: "TSITools",
      image: TSITools,
      alt: "TSITools cover",
      description: lang.pdesc.tsiTools,
      open: "https://tsitools.vercel.app",
      github: "https://github.com/aidartheklutz/newTsiTools",
    },
    {
      title: "Academap",
      image: Academap,
      alt: "Academap cover",
      description: lang.pdesc.academap,
      github: "https://github.com/aidartheklutz/academap#screenshots",
    },
    {
      title: "MemoMate",
      image: MemoMate,
      alt: "MemoMate cover",
      description: lang.pdesc.memoMate,
      github: "https://github.com/aidartheklutz/MemoMate",
      open: "https://expo.dev/accounts/aidartheklutz/projects/memomate/builds/c96e95c1-2b1f-4b57-b074-801fb5582071",
    },
    {
      title: "SpectrumND",
      image: SpectrumND,
      alt: "SpectrumND cover",
      description: lang.pdesc.spectrumNd,
      open: "https://instagram.com/spectrum_nd",
    },
    {
      title: "ПОГОДА ВОТ ЩАС",
      image: WeatherNowKg,
      alt: "WeatherNowKg cover",
      description: lang.pdesc.pogoda,
      open: "https://weathernowkg.vercel.app",
      github: "https://github.com/aidartheklutz/weather-now-kg",
    },
  ];

  return (
    <>
      <NavBar />

      <div className="margin-wrapper">
        <div className="heading-wrapper">
          <div className="heading">
            <h1>{lang.heading}</h1>
            <p>{lang.description}</p>
          </div>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-box" key={project.title}>
              <img
                className="project-cover"
                src={project.image}
                alt={project.alt}
              />

              <div className="project-info">
                <p className="project-title">{project.title}</p>

                <p className="project-description">{project.description}</p>

                <div className="project-actions">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="project-button github-button"
                    >
                      <i className="bi bi-github"></i>
                      <span className="github-text">GitHub</span>
                    </a>
                  )}

                  {project.open && (
                    <a
                      href={project.open}
                      target="_blank"
                      className="project-button open-button"
                    >
                      <i className="bi bi-door-open-fill"></i>
                      <span>{lang.open}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProjectsPage;
