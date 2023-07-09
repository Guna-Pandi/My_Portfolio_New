import React from "react";
import "./Portfolio.css";
import Img1 from "../../assets/jobify.png";
import Img2 from "../../assets/expense.png";
import Img3 from "../../assets/food.png";
import Img4 from "../../assets/take_control.png";
import Img5 from "../../assets/auth-firebase.png";
import Img6 from "../../assets/vote.png";
import { BsGithub } from "react-icons/bs";

const data = [
  {
    id: 1,
    image: Img1,
    title:
      "Jobify is a cloud-based platform for job posting, application management, and candidate tracking.",
    github: "https://github.com/Guna-Pandi/Jobify-Frontend",
    demo: "https://github.com/Guna-Pandi/Jobify-Frontend",
  },
  {
    id: 2,
    image: Img2,
    title:
      "Expense management systems streamline expenses, invoices, and financial reports, saving costs and enhancing financial accuracy and transparency.",
    github: "https://github.com/Guna-Pandi/ExpenseManagementSystem",
    demo: "https://github.com/Guna-Pandi/ExpenseManagementSystem",
  },
  {
    id: 3,
    image: Img3,
    title:
      "An online food delivery website lets customers order from a restaurant and have it delivered to their doorstep with ease.",
    github: "https://github.com/Guna-Pandi/Restaurant-Aplication",
    demo: "https://github.com/Guna-Pandi/Restaurant-Aplication",
  },
  {
    id: 4,
    image: Img4,
    title:
      "A conference website provides event details, registration, and resources like presentation slides or recorded sessions for attendees.",
    github:
      "https://github.com/Guna-Pandi/Conference-website-using-html-and-css",
    demo: "https://github.com/Guna-Pandi/Conference-website-using-html-and-css",
  },
  {
    id: 5,
    image: Img5,
    title:
      "Firebase-based authentication websites allow users to sign up and log in to access the web application's features.  ",
    github: "https://github.com/Guna-Pandi/login_auth_using_firebase_reactJs",
    demo: "https://github.com/Guna-Pandi/login_auth_using_firebase_reactJs",
  },
  {
    id: 6,
    image: Img6,
    title:
      "A voting website allows users to vote online and aggregates the results.",
    github: "https://github.com/Guna-Pandi/voting-with-all-eligible-functions",
    demo: "https://github.com/Guna-Pandi/voting-with-all-eligible-functions",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h1 className="portfolio__h1">Portfolio</h1>
      <h5 className="portfolio__h5">My Recent Works</h5>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer">
                  Github <BsGithub />
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
