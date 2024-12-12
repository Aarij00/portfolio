import "./App.css";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import Links from "./components/Links.jsx";
import { Routes, Route } from "react-router-dom";
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <div className="relative overflow-x-hidden">
      <Routes>
        <Route path="/" element={
          <main className="px-0 md:px-24">
            <Navbar />
            <Links />
            <Home />
            <Projects />
            <Contact />
          </main>
        } />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
}

export default App;
