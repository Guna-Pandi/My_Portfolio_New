import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./Header.css";
import { motion } from "framer-motion";

const HeaderSocial = () => {
  return (
    <motion.div
      className="header_social"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.7 }}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}>
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
    </motion.div>
  );
};

export default HeaderSocial;
