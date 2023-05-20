import "./App.css";
import React from "react";
import Header from "./components/header/Header.jsx";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { useState, useEffect } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  // //Disable Right Click
  // const handleContextmenu = (e) => {
  //   e.preventDefault();
  // };

  // useEffect(() => {
  //   document.addEventListener("contextmenu", handleContextmenu);
  //   return () => {
  //     document.removeEventListener("contextmenu", handleContextmenu);
  //   };
  // }, []);

  return (
    <div>
      {loading ? (
        <div className="loader__symbol">
          <PacmanLoader color={"#4db5ff"} loading={loading} size={50} />
        </div>
      ) : (
        <>
          <Header />
          <Nav />
          <About />
          <Skills />
          <Experience />
          <Portfolio />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
