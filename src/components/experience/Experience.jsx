import React from "react";
import "./Experience.css";
import { VscActivateBreakpoints } from "react-icons/vsc";

const Experience = () => {
  return (
    <section id="experience">
      <h1 className="exp__h1">Experience</h1>
      <div className="container experience__container">
        <article className="experience__head">
          <div className="exp__headings">
            <h3>Team webilicious</h3>
            <p>jan 2023</p>
          </div>
          <div>
            <h5>Role: Full Stack Developer Intern</h5>
          </div>
          <ul>
            <li>
              <VscActivateBreakpoints className="experience__pointicon" />
              <p className="experience__para">
                Led the development of Rurket, a rural side groceries delivery
                application, utilizing ReactJS, TailwindCSS, and Firebase for
                the backend.
              </p>
            </li>
            <li>
              <VscActivateBreakpoints className="experience__pointicon" />
              <p className="experience__para">
                Developed a strong understanding of React and implemented Agile
                methodology throughout the software development lifecycle.
              </p>
            </li>
            <li>
              <VscActivateBreakpoints className="experience__pointicon" />
              <p className="experience__para">
                Responsible for end-to-end testing and reviewing of code to
                ensure high-quality and functionality.
              </p>
            </li>
            <li>
              <VscActivateBreakpoints className="experience__pointicon" />
              <p className="experience__para">
                Built the application to be a Progressive Web Application to
                provide a seamless user experience.
              </p>
            </li>
          </ul>
        </article>
        {/* NEOPHRON THECHNOLOGIES */}
        <article className="experience__head">
          <div className="exp__headings">
            <h3>Neophron Technologies</h3>
            <p>July 2022</p>
          </div>
          <div>
            <h5>Role: Frontend Developer Intern</h5>
          </div>
          <ul>
            <li>
              <VscActivateBreakpoints className="experience__pointicon" />
              <p className="experience__para">
                Responsible for backend development with popular technologies
                like Node.js, Express.js and MongoDB.
              </p>
            </li>
            <li>
              <VscActivateBreakpoints className="experience__pointicon" />
              <p className="experience__para">
                Built API with REST Architecture for a project and got exposure
                with Postman.
              </p>
            </li>
            <li>
              <VscActivateBreakpoints className="experience__pointicon" />
              <p className="experience__para">
              Got exposure to devops tools that increases an organization's ability to deliver applications and services.
              </p>
            </li>
            <li>
              <VscActivateBreakpoints className="experience__pointicon" />
              <p className="experience__para">
              Handled project phases from planning stage to deployment and maintenance stage
              </p>
            </li>
            <li>
              <VscActivateBreakpoints className="experience__pointicon" />
              <p className="experience__para">Learnt about distributed version control system like git and hosting service like Github
              </p>
            </li>
            <li>
              <VscActivateBreakpoints className="experience__pointicon" />
              <p className="experience__para">
              Handled project phases from planning stage to deployment and maintenance stage
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Experience;
