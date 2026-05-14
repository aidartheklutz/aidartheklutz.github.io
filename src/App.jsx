import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import NotFound from "./pages/NotFound/NotFound";
import PlanetProfilePage from "./pages/ProjectsPage/subpages/PlanetProfilePage";
import BlogPage from "./pages/Blog/BlogPage";
import CTFArticle from "./pages/Blog/content/ctf/CTFArticle";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/PlanetProfile" element={<PlanetProfilePage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/ctf" element={<CTFArticle />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
