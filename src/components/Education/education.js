import React from 'react';
import './education.css';
import Background from '../Background/background';

const Education = () => {
  return (
    <section id="education">
      <Background />
      <h1 className="edu-title">Education</h1>
      <div className="line-ed"></div>
      <div className="education-container">
        <div className="ed">
          <div className="ed-content">
            <h2 className="name">Bachelor of Technology</h2>
            <h3 className="subname">(Computer Science Engineering)</h3>
            <p className="name1">Techno India NJR Institute of Technology, Udaipur</p>
          </div>
          <div className="info-tag">CGPA: 9.04</div>
        </div>

        <div className="ed">
          <div className="ed-content">
            <h2 className="name">11th-12th</h2>
            <h3 className="subname">(Science in Mathematics)</h3>
            <p className="name1">Kadi Sarva Vidyalaya (Ksv Campus)</p>
          </div>
          <div className="info-tag">Percentage: 51%</div>
        </div>

        <div className="ed">
          <div className="ed-content">
            <h2 className="name">High School</h2>
            <p className="name1">Shreemati S.B. Shah High School, Eklara</p>
          </div>
          <div className="info-tag">Percentage: 78%</div>
        </div>
      </div>
    </section>
  );
};

export default Education;
