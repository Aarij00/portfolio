import "./App.css";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import Links from "./components/Links.jsx";

function App() {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <Links />
      <main className="px-0 md:px-24">
        <Home />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
