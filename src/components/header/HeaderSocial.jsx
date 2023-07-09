import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./Header.css";

const HeaderSocial = () => {
  return (
    <div
      className="header_social"
      >
      <a
        href="https://www.linkedin.com/in/guna-p-aa3357245"
        target="_blank"
        rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Guna-Pandi" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a
        href="https://instagram.com/guna3473?igshid=ZDdkNTZiNTM="
        target="_blank"
        rel="noreferrer">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocial;
