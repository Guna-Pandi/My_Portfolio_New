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
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="bio-para">
              Greetings! As an experienced front-end developer with{" "}
              <span className="header__sapn">ONE </span> year of experience, I
              design and develop dynamic and responsive web applications that
              offer exceptional user experiences. My expertise lies in
              technologies such as <span className="header__sapn">React</span>,{" "}
              <span className="header__sapn">HTML</span>,{" "}
              <span className="header__sapn">CSS</span>, and{" "}
              <span className="header__sapn">JS</span>, and I utilize frameworks
              like <span className="header__sapn">Tailwind CSS</span> and{" "}
              <span className="header__sapn">Framer Motion</span> to create
              visually stunning designs. Please explore my portfolio to view my
              past projects and experiences. Do not hesitate to contact me for
              any inquiries or collaboration opportunities. Thank you for
              visiting!
            </motion.p>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
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
          viewport={{ once: true, amount: 0.5 }}
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
