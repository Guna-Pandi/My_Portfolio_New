import React from "react";
import "./Contract.css";
import { TbMailForward } from "react-icons/tb";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_5m2metj",
      "template_qloseod",
      form.current,
      "PF5LcYuk_Ua3GW6gy"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h1 className="contact__h1">Contact</h1>
      <h5 className="contact__h5">Get In Touch</h5>

      <div className="container contact__container">
        <div className="contact__options">
          <aritcle className="contact__option">
            <TbMailForward className="contact__option-icon" />
            <h4>Email</h4>
            <h5>gunapandidurai@gmail.com</h5>
            <a href="mailto:gunapandidurai@gmail.com">Send a Message </a>
          </aritcle>

          <aritcle className="contact__option">
            <BsInstagram className="contact__option-icon" />
            <h4>Instagram</h4>
            <h5>guna3437</h5>
            <a href="https://instagram.com/guna3473?igshid=ZDdkNTZiNTM=">
              Send a Message{" "}
            </a>
          </aritcle>

          <aritcle className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <a href="https://wa.me/qr/Y54UPQ7GNAJ5P1">Send a Message </a>
          </aritcle>
        </div>
        {/* end of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="fullperson"
            placeholder="Your Name 😊"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Mail Id 💌"
            required
          />
          <textarea
            name="message"
            rows="7"
            required
            placeholder="Your Message 📝"></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message 📩
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
