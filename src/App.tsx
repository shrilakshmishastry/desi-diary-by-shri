import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { MainLayout } from "./layouts/MainLayout";
import { Home } from "./pages/Home";
import Blog from "./pages/blog/Blog";
import BlogPostPage from "./pages/blog/BlogPost";
import Gallery from "./pages/gallery/Gallery";
import Talks from "./pages/talks/Talks";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/talks" element={<Talks />} />
          </Routes>
        </MainLayout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
