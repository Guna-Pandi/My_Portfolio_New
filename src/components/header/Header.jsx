import React from "react";
import "./Header.css";
import Multitext from "./Multitext";
import CTA from "./CTA";
// import ME from "../../assets/guna3.png";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header id="home">
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
              "Welcome to my portfolio! As a front-end developer with 1 year of
              experience, I create dynamic and responsive web apps that offer
              exceptional user experience. I focus on technologies like React,
              Vue.js, Angular, HTML, CSS, and JS to deliver cutting-edge
              solutions. Check out my past projects and experiences, and contact
              me for any questions or collaboration. Thank you for visiting!"
            </p>
          </div>
          {/* <div class="image">
            <img src={ME} alt="me" class="my-img" />
          </div> */}
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
