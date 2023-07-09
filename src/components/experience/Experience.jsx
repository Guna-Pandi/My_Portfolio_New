import React from "react";
import "./Experience.css";
import { VscActivateBreakpoints } from "react-icons/vsc";

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h1 className="exp__h1">Experience</h1>
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
            <li className="experience__list">
              <VscActivateBreakpoints className="experience__pointicon" />
              <p className="experience__para">
                Spearheaded the development of Rurket, a grocery delivery
                application for rural areas
              </p>
            </li>
            <li>
              <VscActivateBreakpoints className="experience__pointicon" />
              <p className="experience__para">
                Utilized ReactJS, TailwindCSS, and Firebase for the backend
              </p>
            </li>
            <li>
              <VscActivateBreakpoints className="experience__pointicon" />
              <p className="experience__para">
                Implemented Agile methodology to ensure an efficient software
                development lifecycle
              </p>
            </li>
            <li>
              <VscActivateBreakpoints className="experience__pointicon" />
              <p className="experience__para">
                Gained a robust understanding of React
              </p>
            </li>
            <li>
              <VscActivateBreakpoints className="experience__pointicon" />
              <p className="experience__para">
                Oversaw end-to-end testing and code reviewing to guarantee
                high-quality and functional results
              </p>
            </li>
            <li>
              <VscActivateBreakpoints className="experience__pointicon" />
              <p className="experience__para">
                Built the application as a Progressive Web Application to
                provide a seamless user experience
              </p>
            </li>
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
            <li>
              <VscActivateBreakpoints className="experience__pointicon" />
              <p className="experience__para">
                As a front-end developer, I utilized ReactJS, CSS, Material UI,
                and Framer Motion to create engaging user interfaces for various
                projects.
              </p>
            </li>
            <li>
              <VscActivateBreakpoints className="experience__pointicon" />
              <p className="experience__para">
                I was responsible for the development of the front-end,
                collaborating closely with the back-end team to integrate it
                with popular technologies like Node.js, Express.js, and MongoDB.
              </p>
            </li>
            <li>
              <VscActivateBreakpoints className="experience__pointicon" />
              <p className="experience__para">
                I gained knowledge of DevOps tools and techniques that increase
                an organization's ability to deliver applications and services
                efficiently.
              </p>
            </li>
            <li>
              <VscActivateBreakpoints className="experience__pointicon" />
              <p className="experience__para">
                Throughout the development process, I handled various project
                phases from planning to deployment and maintenance stages,
                ensuring smooth delivery.
              </p>
            </li>
            <li>
              <VscActivateBreakpoints className="experience__pointicon" />
              <p className="experience__para">
                I also learned about distributed version control systems like
                Git and hosted projects on services like Github for better
                collaboration and version control.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Experience;
