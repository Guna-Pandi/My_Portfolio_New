import React from "react";
import "./Footer.css";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <section className="footer">
      <a href="#home" className="footer__logo">
        GUNA PANDITHURAI
      </a>

      <ul className="permalinks">
        <li>
          <a href="#home" rel="noreferrer">
            Home
          </a>
        </li>
        <li>
          <a href="#about" rel="noreferrer">
            About
          </a>
        </li>
        <li>
          <a href="#skills" rel="noreferrer">
            Skills
          </a>
        </li>
        <li>
          <a href="#experience" rel="noreferrer">
            Experience
          </a>
        </li>
        <li>
          <a href="#portfolio" rel="noreferrer">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" rel="noreferrer">
            Contact
          </a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/guna-p-aa3357245"
          target="_blank"
          rel="noreferrer">
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/Guna-Pandi"
          target="_blank"
          rel="noreferrer">
          <BsGithub />
        </a>
        <a
          href="https://instagram.com/guna3473?igshid=ZDdkNTZiNTM="
          target="_blank"
          rel="noreferrer">
          <BsInstagram />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; GUNA-PANDI. All rights reserved.</small>
      </div>
    </section>
  );
};

export default Footer;
