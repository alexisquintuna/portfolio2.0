import "./App.css";
import Header from "./components/sections/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/sections/Footer/Footer";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import Pebbles from "./pages/Pebbles";

function App() {
  return (
    <div className="relative">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
          <Route path="/pebbles" element={<Pebbles />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
