import React from "react";
import "./intro.css";
import bg from "../../assets/bg10.png";
import { Link } from "react-scroll";
import hire from "../../assets/hireme.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="Intro">
          I'm <span className="IntroName">Sakshee Patel,</span> </span>
          <span className="typing">Web Developer.</span>

        <p className="Intropara">
          I strive to design and develop websites that combine aesthetic
          <br /> appeal with exceptional functionality, <br />
          ensuring an unforgettable user experience
        </p>
        <Link>
          <button className="btn">
            <img src={hire} alt="hire me" className="btnImg" />
            My Resume
          </button>

          <button className="btn1">
            <img src={hire} alt="hire me" className="btnImg" />
            Hire Me{" "}
          </button>
        </Link>
      </div>
      <img src={bg} alt="Portfolio" className="bg" />
    </section>
  );
};

export default Intro;
