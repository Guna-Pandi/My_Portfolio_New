import React from "react";
import "./Experience.css";
import { VscActivateBreakpoints } from "react-icons/vsc";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <motion.h1 className="exp__h1" 
      initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -30 },
          visible: { opacity: 1, x: 0 },
        }} 
       >Experience</motion.h1>
      <div className="container experience__container">
        <article className="experience__head1">
          <div className="experience__overall">
            <div className="exp__headings">
              <h3>Team webilicious</h3>
              <p>jan 2023</p>
            </div>
            <div>
              <h5>Role: Full Stack Developer Intern</h5>
            </div>
          </div>
          <ul className="experience__ul">
            <motion.li className="experience__list"
               initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.7 }}
              variants={{
                hidden: { opacity: 0, y: 80 },
                visible: { opacity: 1, y: 0 },
              }}>
              <VscActivateBreakpoints className="experience__pointicon" />
              <p className="experience__para">
                Led the development of Rurket, a rural side groceries delivery
                application, utilizing ReactJS, TailwindCSS, and Firebase for
                the backend.
              </p>
            </motion.li>
            <motion.li    initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.7 }}
              variants={{
                hidden: { opacity: 0, y: 80 },
                visible: { opacity: 1, y: 0 },
              }}>
              <VscActivateBreakpoints className="experience__pointicon" />
              <p className="experience__para">
                Developed a strong understanding of React and implemented Agile
                methodology throughout the software development lifecycle.
              </p>
            </motion.li>
            <motion.li    initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.7 }}
              variants={{
                hidden: { opacity: 0, y: 80 },
                visible: { opacity: 1, y: 0 },
              }}>
              <VscActivateBreakpoints className="experience__pointicon" />
              <p className="experience__para">
                Responsible for end-to-end testing and reviewing of code to
                ensure high-quality and functionality.
              </p>
            </motion.li>
            <motion.li    initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.7 }}
              variants={{
                hidden: { opacity: 0, y: 80 },
                visible: { opacity: 1, y: 0 },
              }}>
              <VscActivateBreakpoints className="experience__pointicon" />
              <p className="experience__para">
                Built the application to be a Progressive Web Application to
                provide a seamless user experience.
              </p>
            </motion.li>
          </ul>
        </article>
        {/* NEOPHRON THECHNOLOGIES */}
        <article className="experience__head2">
          <div className="experience__overall">
            <div className="exp__headings">
              <h3>Neophron Technologies</h3>
              <p>July 2022</p>
            </div>
            <div>
              <h5>Role: Frontend Developer Intern</h5>
            </div>
          </div>
          <ul className="experience__ul">
            <motion.li    initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.7 }}
              variants={{
                hidden: { opacity: 0, y: 80 },
                visible: { opacity: 1, y: 0 },
              }}>
              <VscActivateBreakpoints className="experience__pointicon" />
              <p className="experience__para">
                Responsible for backend development with popular technologies
                like Node.js, Express.js and MongoDB.
              </p>
            </motion.li>
            <motion.li    initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.7 }}
              variants={{
                hidden: { opacity: 0, y: 80 },
                visible: { opacity: 1, y: 0 },
              }}>
              <VscActivateBreakpoints className="experience__pointicon" />
              <p className="experience__para">
                Built API with REST Architecture for a project and got exposure
                with Postman.
              </p>
            </motion.li>
            <motion.li    initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.7 }}
              variants={{
                hidden: { opacity: 0, y: 80 },
                visible: { opacity: 1, y: 0 },
              }}>
              <VscActivateBreakpoints className="experience__pointicon" />
              <p className="experience__para">
                Got exposure to devops tools that increases an organization's
                ability to deliver applications and services.
              </p>
            </motion.li>
            <motion.li    initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.7 }}
              variants={{
                hidden: { opacity: 0, y: 80 },
                visible: { opacity: 1, y: 0 },
              }}>
              <VscActivateBreakpoints className="experience__pointicon" />
              <p className="experience__para">
                Handled project phases from planning stage to deployment and
                maintenance stage
              </p>
            </motion.li>
            <motion.li    initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.7 }}
              variants={{
                hidden: { opacity: 0, y: 80 },
                visible: { opacity: 1, y: 0 },
              }}>
              <VscActivateBreakpoints className="experience__pointicon" />
              <p className="experience__para">
                Learnt about distributed version control system like git and
                hosting service like Github
              </p>
            </motion.li>
            <motion.li    initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.7 }}
              variants={{
                hidden: { opacity: 0, y: 80 },
                visible: { opacity: 1, y: 0 },
              }}>
              <VscActivateBreakpoints className="experience__pointicon" />
              <p className="experience__para">
                Handled project phases from planning stage to deployment and
                maintenance stage
              </p>
            </motion.li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Experience;
