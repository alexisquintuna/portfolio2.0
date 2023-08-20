import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_15gh2we",
        "template_dld5dee",
        form.current,
        "-TuHutuXNZ6FlZchn"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div id="contact" className="flex flex-col md:flex-row justify-between">
      <div className="pb-4 md:py-0">
        <h3 className="text-cardTitle">Contact</h3>
        <h2 className="text-muchBiggerCardTitle text-whiteColor">
          Memorable, Engaging,
          <br />
          Personalized
          <br />
          Developer.
        </h2>
      </div>
      <div className="text-projectsTitle w-full md:w-1/2 flex flex-col items-center">
        <form className="flex flex-col w-full" ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="3"
            placeholder="Your Message"
            required
          ></textarea>
          <button className="submit-btn">SUBMIT</button>
        </form>
        <div className="w-full flex justify-center sm:justify-end items-center gap-4">
          <svg
            className="arrow-down"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            <path d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z" />
          </svg>
          <h5>More Ways to Find Me :) </h5>
          <svg
            className="arrow-down"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            <path d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Contact;
