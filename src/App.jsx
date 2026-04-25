import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import NotFound from "./pages/NotFound/NotFound";
import PlanetProfilePage from "./pages/ProjectsPage/subpages/PlanetProfilePage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/PlanetProfile" element={<PlanetProfilePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
