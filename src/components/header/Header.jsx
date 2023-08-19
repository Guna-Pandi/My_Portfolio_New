import React from "react";
import "./Header.css";
import Multitext from "./Multitext";
import CTA from "./CTA";
import ME from "../../assets/guna1.jpg";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header id="home">
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Guna Pandithurai</h1>

        <h5 className="text-light">
          <Multitext />
        </h5>
        <CTA />
        <HeaderSocial />
        <div className="cont-bio">
          <div className="bio">
            <p className="bio-para">
              Greetings! As an experienced <span className="header__sapn">Front-end developer</span>   with{" "}
              <span className="header__sapn">ONE </span> year of experience, I
              design and develop dynamic and responsive web applications that
              offer exceptional user experiences. My expertise lies in
              technologies such as{" "}
              <span className="header__sapn">React JS</span>,{" "}
              <span className="header__sapn">HTML</span>,{" "}
              <span className="header__sapn">CSS</span>, and{" "}
              <span className="header__sapn">JS</span>, and I utilize frameworks
              like <span className="header__sapn">Tailwind CSS</span> and{" "}
              <span className="header__sapn">Framer Motion</span> to create
              visually stunning designs. Please explore my portfolio to view my
              past projects and experiences. Do not hesitate to contact me for
              any inquiries or collaboration opportunities.
              <span className="header__sapn"> Thank you </span> for visiting!
            </p>
          </div>
          <div class="image">
            <img src={ME} alt="me" class="my-img" />
          </div>
        </div>
        <div>
          <a href="#contact" className="scroll_down">
            Scroll Down
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
