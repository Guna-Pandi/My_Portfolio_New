import React from "react";
import "./About.css";
import { motion } from "framer-motion";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const About = () => {
  return (
    <section id="about" className="about__section">
      <motion.h1
        className="about__h1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        variants={{
          hidden: { opacity: 0, x: -80 },
          visible: { opacity: 1, x: 0 },
        }}>
        About Me
      </motion.h1>
      <h5 className="about__h5">Get to Know</h5>
      <div className="container about__container">
        <div className="about__content">
          <div className="about__pt1">
            <motion.p
              className="about__para"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.9 }}
              transition={{ duration: 0.7 }}
              variants={{
                hidden: { opacity: 0, y: 80 },
                visible: { opacity: 1, y: 0 },
              }}>
              <MdKeyboardDoubleArrowRight className="about__arrow1" />
              As a skilled front-end web developer with one year of experience,
              I am passionate about using my technical abilities to create
              visually appealing and user-friendly solutions that address the
              unique needs of individuals and businesses. With expertise in
              HTML, CSS, and JavaScript, I can craft custom website solutions
              that truly meet my clients' requirements, thanks to my ability to
              understand and empathize with them. I am dedicated to staying
              current with the latest front-end frameworks, such as React and
              Angular, to deliver cutting-edge solutions
            </motion.p>
          </div>
          <br></br>
          <div className="about__pt1">
            <motion.p
              className="about__para"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.9 }}
              transition={{ duration: 0.7 }}
              variants={{
                hidden: { opacity: 0, y: 80 },
                visible: { opacity: 1, y: 0 },
              }}>
              <MdKeyboardDoubleArrowRight className="about__arrow1" />I am
              currently pursuing my BTech degree in Information Technology from
              Coimbatore Institute of Technology, and I am set to graduate in
              2024. In addition to my technical expertise, I am also proficient
              in programming languages such as C and C++, and I have developed
              strong problem-solving skills, communication and interpersonal
              skills. I have built over 10 websites using various technologies,
              and I am always eager to learn new skills and build innovative,
              responsive web apps in the future.
            </motion.p>
          </div>
          <br></br>

          <div className="about__pt1">
            <motion.p
              className="about__para"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.9 }}
              transition={{ duration: 0.7 }}
              variants={{
                hidden: { opacity: 0, y: 80 },
                visible: { opacity: 1, y: 0 },
              }}>
              <MdKeyboardDoubleArrowRight className="about__arrow1" />
              As a front-end web developer, I am responsible for implementing
              designs provided by UI/UX designers, ensuring that websites are
              optimized for performance and accessibility, and collaborating
              with back-end developers to integrate front-end functionality with
              back-end logic. I also take charge of ensuring that the website
              looks great on all devices and screens. I believe in life-long
              learning, and I am constantly on the lookout for more efficient
              ways to do things. To find out more about what I can do for you,
              check out my work below.
            </motion.p>
          </div>

          <br></br>
          <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, x: -80 },
            visible: { opacity: 1, x: 0 },
          }}>
          <a href="#contact" className="btn btn-primary">
            Let's Talk😊
          </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
