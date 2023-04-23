import React from "react";
import "./About.css";
// import Me2 from "../../assets/guna1.jpg";
// import { TbMilitaryAward } from "react-icons/tb";
// import { FaUsers } from "react-icons/fa";
import { GiFrayedArrow } from "react-icons/gi";

const About = () => {
  return (
    <section id="about" className="about__section">
      <h5>Get to Know</h5>
      <h1 className="about__h1">About Me</h1>
      <div className="container about__container">
        {/* <div className="about__me">
          <div className="about__me-image">
            <img src={Me2} alt="" />
          </div>
        </div> */}
        <div className="about__content">
          {/* <div className="about__cards">
            <article className="about__card">
              <TbMilitaryAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years</small>
            </article>

            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ WorldWide</small>
            </article>

            <article className="about__card">
              <SiNounproject className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div> */}
          <div className="about__pt1">
          <GiFrayedArrow className="about__arrow" />
          <p>
            As a skilled front-end web developer with 1 year of experience, I am
            passionate about utilizing my technical abilities to create visually
            appealing and user-friendly solutions that effectively address the
            unique needs of individuals and businesses. My expertise in HTML,
            CSS, and JavaScript, coupled with my ability to understand and
            empathize with my clients, allows me to craft custom website
            solutions that truly meet their requirements. I am dedicated to
            staying current with the latest front-end frameworks, such as React
            and Angular, in order to continue delivering cutting-edge solutions.
          </p>
          </div>
          <br></br>

          <div className="about__pt1">
          <GiFrayedArrow className="about__arrow" />
          <p>
          I am currently pursuing my BTech degree in Information Technology
            from Coimbatore Institute of Technology, and I am set to graduate in
            2024. In addition to my technical expertise, I am also proficient in
            programming languages such as C and C++, and I have developed strong
            problem-solving skills, communication and interpersonal skills. I
            have built over 10 websites using various technologies, and I am
            always eager to learn new skills and build innovative, responsive
            web apps in the future.
          </p>
          </div>
          <br></br>

          <div className="about__pt1">
          <GiFrayedArrow className="about__arrow" />
          <p>
          As a front-end web developer, I am responsible for implementing
            designs provided by UI/UX designers, ensuring that websites are
            optimized for performance and accessibility, and collaborating with
            back-end developers to integrate front-end functionality with
            back-end logic. I also take charge of ensuring that the website
            looks great on all devices and screens. I believe in life-long
            learning, and I am constantly on the lookout for more efficient ways
            to do things. To find out more about what I can do for you, check
            out my work below.
          </p>
          </div>
         
          <br></br>
          <a href="#contact" className="btn btn-primary">
            Let's Talk😊
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
