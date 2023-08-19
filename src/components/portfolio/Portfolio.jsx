import React from "react";
import "./Portfolio.css";
import Img1 from "../../assets/jobify.png";
import Img2 from "../../assets/expense.png";
import Img3 from "../../assets/food.png";
import Img4 from "../../assets/take_control.png";
import Img5 from "../../assets/auth-firebase.png";
import Img6 from "../../assets/vote.png";
import Img7 from "../../assets/syncfusion.png";
import Img8 from "../../assets/weather.png";
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
    demo: "https://restaurant-aplication-8tkozajbo-guna-pandi.vercel.app/ ",
  },
  {
    id: 4,
    image: Img4,
    title:
      "The website is designed to provide information about the event, including schedules, speakers, workshops, and more. It is also a platform for students to register for the event. ",
    github: "https://github.com/Guna-Pandi/CIT_Symposium",
    demo: "https://celestra.in/",
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
      "Discover global trends, stylish clothing, and accessories for men and women. User-friendly interface, detailed product descriptions, and customer reviews.",
    github: "https://github.com/Guna-Pandi/TrendVortex_Client",
    demo: "https://trend-vortex.vercel.app/ ",
  },
  {
    id: 7,
    image: Img7,
    title:
      "Web dashboards have become a critical tool for businesses and organizations to visualize and analyze data effectively. Syncfusion, a renowned provider of UI controls and frameworks.",
    github: "https://github.com/Guna-Pandi/DashBoard-Syncfusion",
    demo: "https://dash-board-syncfusion.vercel.app/ ",
  },
  {
    id: 8,
    image: Img8,
    title:
      "Weather information is vital for individuals, businesses, and travelers alike. Creating a weather website using the OpenWeather API allows you to provide users with up-to-date weather forecasts and conditions for any location around the world.",
    github: "https://github.com/Guna-Pandi/Weather-React-app",
    demo: "https://weather-henna-nu.vercel.app/",
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
