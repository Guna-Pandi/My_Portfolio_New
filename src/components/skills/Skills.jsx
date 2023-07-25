import React from "react";
import "./Skills.css";
import Html from "../../assets/logo/html.png";
import Css from "../../assets/logo/css1.png";
import Js from "../../assets/logo/js.png";
import React1 from "../../assets/logo/react.png";
import Tailwind from "../../assets/logo/tailwind.png";
import Git from "../../assets/logo/git.png";
import GitHub from "../../assets/logo/github.png";
import Vscode from "../../assets/logo/vscode.png";
import Npm from "../../assets/logo/npm.png";
import Atom from "../../assets/logo/atom.png";
import Firebase from "../../assets/logo/firebase.png";
import Canva from "../../assets/logo/canva.png";
import Figma from "../../assets/logo/figma.png";
import Netlify from "../../assets/logo/Netlify New 2023.png";
import Java from "../../assets/logo/java.png";
import Sync from "../../assets/logo/syncfusion.png";

const Skills = () => {
  return (
    <section id="skills" className="skill__section">
      <h1 className="skills__h1">Skills</h1>
      <h5 className="skills__h5">
        Here's a glimpse of my tech toolkit, packed with a diverse range of
        cutting-edge technologies and tools I've skillfully wielded!
      </h5>
      <div className="skills__images">
        <div className="single__img">
          <img src={Html} alt="html" className="logo__imgs" />
          <p className="skills__para">HTML</p>
        </div>
        <div className="single__img">
          <img src={Css} alt="css" className="logo__imgs" />
          <p className="skills__para">CSS</p>
        </div>
        <div className="single__img">
          <img src={Js} alt="js" className="logo__imgs" />
          <p className="skills__para">Java Script</p>
        </div>
        <div className="single__img">
          <img src={React1} alt="react" className="logo__imgs" />
          <p className="skills__para">React Js</p>
        </div>
        <div className="single__img">
          <img src={Tailwind} alt="tailwind" className="logo__imgs" />
          <p className="skills__para">Tailwind</p>
        </div>
        <div className="single__img">
          <img src={Git} alt="git" className="logo__imgs" />
          <p className="skills__para">Git</p>
        </div>
        <div className="single__img">
          <img src={GitHub} alt="github" className="logo__imgs" />
          <p className="skills__para">GitHub</p>
        </div>
        <div className="single__img">
          <img src={Vscode} alt="vscode" className="logo__imgs" />
          <p className="skills__para">VsCode</p>
        </div>
        <div className="single__img">
          <img src={Atom} alt="Atom" className="logo__imgs" />
          <p className="skills__para">Atom</p>
        </div>
        <div className="single__img">
          <img src={Npm} alt="npm" className="logo__imgs" />
          <p className="skills__para">NPM</p>
        </div>
        <div className="single__img">
          <img src={Firebase} alt="firebase" className="logo__imgs" />
          <p className="skills__para">FireBase</p>
        </div>
        <div className="single__img">
          <img src={Netlify} alt="Netlify" className="logo__imgs" />
          <p className="skills__para">Netlify</p>
        </div>
        <div className="single__img">
          <img src={Canva} alt="canva" className="logo__imgs" />
          <p className="skills__para">Canva</p>
        </div>
        <div className="single__img">
          <img src={Figma} alt="figma" className="logo__imgs" />
          <p className="skills__para">Figma</p>
        </div>
        <div className="single__img">
          <img src={Java} alt="figma" className="logo__imgs" />
          <p className="skills__para">Java</p>
        </div>
        <div className="single__img">
          <img src={Sync} alt="figma" className="logo__imgs" />
          <p className="skills__para">Syncfusion</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
