import Header from "./Components/Header.jsx";
import Home from "./pages/Home.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import Projects from "./pages/Projects.jsx";
import Skills from "./pages/Skills.jsx";
import Education from "./pages/Education.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./Components/Footer.jsx";
import ScrollToTop from "./Components/ScrollToTop.js";
import "./App.css";
import Loader from "./Components/Loader.jsx";
import { useEffect, useState } from "react";

function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 1200);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {
        load === true ? (
          <Loader />
        ) : (
          <main>
          <ScrollToTop />
          <Header />
          <Home />
          <AboutMe />
          <Projects />
          <Skills />
          <Education />
          <Contact />
          <Footer />
          </main>
        )
      }
    </>
  );
}

export default App;
