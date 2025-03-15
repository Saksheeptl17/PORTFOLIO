import React from 'react';
import './skills.css';
import html from '../../assets/html-5.png';
import css from '../../assets/css-3.png';
import js from '../../assets/js.png';
import bt from '../../assets/bootstrap.png';
import reactLogo from '../../assets/react.png';
import node from '../../assets/node.png';
import mongo from '../../assets/mongodb.png';
import sql from '../../assets/mysql.png';
import vs from '../../assets/vs.png';
import db from '../../assets/dbms.png';
import figma from '../../assets/figma.png';
import xd from '../../assets/xd.png';
import github from '../../assets/github.png';
import git from '../../assets/git.png';
import c from '../../assets/c.png';
import cpp from '../../assets/c++.png';
import Background from '../Background/background';

const skillsData = [
  { img: html },
  { img: css },
  { img: js },
  { img: bt },
  { img: reactLogo },
  { img: node },
  { img: mongo },
  { img: sql },
  { img: vs },
  { img: db },
  { img: figma },
  { img: xd },
  { img: github },
  { img: git },
  { img: c },
  { img: cpp },
];

const Skills = () => {
  return (
    <section id="skills">
       <Background />
      <h1 className="skill-title">My Stack</h1>
      <div className="line-ed"></div>

      <div className="skill-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.img} alt="Skill" className="skill-icon" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;