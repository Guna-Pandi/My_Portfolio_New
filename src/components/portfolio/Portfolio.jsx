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
    title: "This is portfolio items",
    github: "",
    demo: "",
  },
  {
    id: 1,
    image: Img2,
    title: "This is portfolio items",
    github: "",
    demo: "",
  },
  {
    id: 1,
    image: Img3,
    title: "This is portfolio items",
    github: "",
    demo: "",
  },
  {
    id: 1,
    image: Img4,
    title: "This is portfolio items",
    github: "",
    demo: "",
  },
  {
    id: 1,
    image: Img5,
    title: "This is portfolio items",
    github: "",
    demo: "",
  },
  {
    id: 1,
    image: Img6,
    title: "This is portfolio items",
    github: "",
    demo: "",
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
