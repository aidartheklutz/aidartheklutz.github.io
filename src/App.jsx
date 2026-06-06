import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import NotFound from "./pages/NotFound/NotFound";
import PlanetProfilePage from "./pages/ProjectsPage/subpages/PlanetProfilePage";
import BlogPage from "./pages/Blog/BlogPage";
import CTFArticle from "./pages/Blog/content/ctf-140526/CTFArticle";
import HistoryProjectArticle from "./pages/Blog/content/history-project-250426/HistoryProjectArticle";
import GoodreadsChallengesArticle from "./pages/Blog/content/goodreads-challenges-040626/GoodreadsChallengesArticle";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/PlanetProfile" element={<PlanetProfilePage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/ctf-140526" element={<CTFArticle />} />
      <Route
        path="/blog/history-project-250426"
        element={<HistoryProjectArticle />}
      />
      <Route
        path="/blog/goodreads-challenges-040626"
        element={<GoodreadsChallengesArticle />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
