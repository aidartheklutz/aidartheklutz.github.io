import React from "react";
import NavBar from "../../components/NavBar";
import "./ProjectsPage.css";

import MemoMate from "./covers/MemoMate.png";
import TSITools from "./covers/TSITools.png";
import PlanetProfile from "./covers/PlanetProfile.png";
import SpectrumND from "./covers/SpectrumND.png";
import ActiveRecaller from "./covers/ActiveRecaller.png";
import WeatherNowKg from "./covers/WeatherNowKg.png";
import Academap from "./covers/Academap.png";

const projects = [
  {
    title: "Active Recaller",
    image: ActiveRecaller,
    alt: "Active Recaller cover",
    description:
      "A web app designed to help students memorize texts using the Active Recall technique. The user pastes the text they need to remember the contents of, reads it, and gets transferred to the writing section once ready. The user recreates the text from memory and then an AI compares the user's recall with the original text. The user is then provided with a convenient list of points they wrote correctly, missed, remembered inaccurately, or made up.",
    github: "https://github.com/aidartheklutz/active-recaller",
    open: "https://activerecaller.vercel.app",
  },
  {
    title: "TSITools",
    image: TSITools,
    alt: "TSITools cover",
    description:
      "TSITools is a website created specifically for students of the Technical School of Innovation (a technical school in Bishkek where I study). It includes a variety of useful tools, such as a GPA calculator, an AI-powered excuse letter generator, affirmations, etc.",
    open: "https://tsitools.vercel.app",
    github: "https://github.com/aidartheklutz/newTsiTools",
  },
  {
    title: "Academap",
    image: Academap,
    alt: "Academap cover",
    description:
      "Academap is a map of Bishkek that helps school and university students discover useful opportunities; including olympiads, Model UN events, conferences, volunteering, internships, courses, film meetups, book clubs, English Talking Clubs, contests, trainings, seminars, workshops, hackathons, lectures, debates, career fairs, scholarships, and other activities; all in one place, without looking through countless websites and social media pages.",
    github: "https://github.com/aidartheklutz/academap#screenshots",
  },
  {
    title: "MemoMate",
    image: MemoMate,
    alt: "MemoMate cover",
    description:
      "MemoMate is a mobile app designed for people living with memory issues such as dementia or Alzheimer's disease, set up and managed by their caretaker. We built it as team Brynza during Nexel Hackathon in under 9 hours to give vulnerable individuals a simple, dignified tool for navigating daily life.",
    github: "https://github.com/aidartheklutz/MemoMate",
    open: "https://expo.dev/accounts/aidartheklutz/projects/memomate/builds/c96e95c1-2b1f-4b57-b074-801fb5582071",
  },
  {
    title: "SpectrumND",
    image: SpectrumND,
    alt: "SpectrumND cover",
    description:
      "An Instagram page educating the Russian-speaking community about neurodivergent conditions. Growing it is quite difficult, however I am determined to make the world a better place.",
    open: "https://instagram.com/spectrum_nd",
  },
  {
    title: "ПОГОДА ВОТ ЩАС",
    image: WeatherNowKg,
    alt: "WeatherNowKg cover",
    description:
      "I created ПОГОДА ВОТ ЩАС (Weather Now KG) as a small exercise in working with APIs and UI design, and it took about four hours to complete in total. It's a convenient website that provides weather information for most cities in Kyrgyzstan, displaying the current weather at the moment the page is opened.",
    open: "https://weathernowkg.vercel.app",
    github: "https://github.com/aidartheklutz/weather-now-kg",
  },
];

function ProjectsPage() {
  return (
    <>
      <NavBar />

      <div className="margin-wrapper">
        <h1 className="projects-title">My projects</h1>
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
                      <span>Open</span>
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
