import React from 'react';
import './about.css';
import bg1 from '../../assets/abtbgr.png';
import Background from '../Background/background';


const About = () => {
  return (
    <section id="about">
    <Background />
      <h1 className="about-title"><b>About Me</b></h1>
      <div className="who">
        <span className="line"></span>
        <span className="who-i-am">Who I Am</span>
        <span className="line"></span>
      </div>
      <img src={bg1} alt="About background" className="bg1" />
      <p className="text">
        <b>I'm Sakshee Patel, and I'm a <span className="cont">Web Developer </span></b>
      </p>
      <p className="text1">
        Passionate about Web Development, my goal is to achieve a good position by doing satisfying work in the IT field.
        I am a self-motivated team player with quick learning skills, seeking a position as an intern in web development.
        At Next Generation Web Development, I aspire to apply my knowledge of web design and leadership abilities to meet client needs and exceed their expectations.
      </p>
    </section>
  );
};

export default About;