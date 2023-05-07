import React from "react";
import "./Header.css";
import Multitext from "./Multitext";
import CTA from "./CTA";
import ME from "../../assets/guna1.jpg";
import HeaderSocial from "./HeaderSocial";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header id="home">
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}>
          Guna Pandithurai
        </motion.h1>

        <h5 className="text-light">
          <Multitext />
        </h5>
        <CTA />
        <HeaderSocial />
        <div className="cont-bio">
          <div className="bio">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="bio-para">
              "Welcome to my portfolio! As a front-end developer with 1 year of
              experience, I create dynamic and responsive web apps that offer
              exceptional user experience. I focus on technologies like React,
              Vue.js, Angular, HTML, CSS, and JS to deliver cutting-edge
              solutions. Check out my past projects and experiences, and contact
              me for any questions or collaboration. Thank you for visiting!"
            </motion.p>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5}}
            transition={{ duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, x: 40 },
              visible: { opacity: 1, x: 0 },
            }}
            class="image">
            <img src={ME} alt="me" class="my-img" />
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, y: -100 },
            visible: { opacity: 1, y: 0 },
          }}>
          <a href="#contact" className="scroll_down">
            Scroll Down
          </a>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
