import React from "react";
import "./Header.css";
import Multitext from "./Multitext";
import CTA from "./CTA";
import ME from "../../assets/guna3.png";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Guna Pandithurai</h1>
        <h5 class="text-light">
          <Multitext />
        </h5>
        <CTA />
        <HeaderSocial />
        <div class="cont-bio">
          <div class="bio">
            <p className="bio-para">
              "Welcome to my portfolio! I am a web developer with 1 year of
              experience building dynamic and responsive web applications. I am
              continuously expanding my skillset, currently focusing on
              technologies such as React, Node.js, Express, MongoDB, Eleventy,
              Tailwind CSS, and PostgreSQL. Here, you will find a collection of
              my past projects and my experiences. Thanks for visiting!"
            </p>
          </div>
          <div class="image">
            <img src={ME} alt="me" class="my-img" />
          </div>
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
