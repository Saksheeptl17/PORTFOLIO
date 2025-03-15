import React from 'react'
import './experience.css'
import Background from '../Background/background'

function Experience() {
  return (
    <div>
      <section id="experience">
        <Background />
          <h1 className="experience">Experience</h1>
          <span className="line-ed"></span>
          <div className="exp">
               <h1 className="exp">Intern Ecommerce Developer - Cnetric Global Inc.</h1>
               <p className="details">Worked on building and enhancing eCommerce platforms using React.js, ensuring seamless user experiences.<br/>
Collaborated on API integrations and testing using Postman for efficient functionality.<br/>
Gained hands-on experience in front-end development and eCommerce application workflows.</p>
          </div>
      </section>
    </div>
  )
}

export default Experience
