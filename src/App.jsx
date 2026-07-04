import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import NotFound from "./pages/NotFound/NotFound";
import BlogPage from "./pages/Blog/BlogPage";
import CTFArticle from "./pages/Blog/content/ctf-140526/CTFArticle";
import HistoryProjectArticle from "./pages/Blog/content/history-project-250326/HistoryProjectArticle";
import BugTermArticle from "./pages/Blog/content/bug-term-030726/BugTermArticle";
import ElizaArticle from "./pages/Blog/content/eliza-050726/ElizaArticle";
import LinksPage from "./pages/LinksPage/LinksPage";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/links" element={<LinksPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/ctf-140526" element={<CTFArticle />} />
        <Route
          path="/blog/history-project-250326"
          element={<HistoryProjectArticle />}
        />
        <Route path="/blog/bug-term-030726" element={<BugTermArticle />} />
        <Route path="/blog/eliza-050726" element={<ElizaArticle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
