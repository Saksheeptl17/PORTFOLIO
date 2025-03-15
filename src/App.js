import React from 'react';
import Background from './components/Background/background';
import Navbar from './components/NavBar/navbar';
import Intro from './components/Intro/intro';
import About from './components/About/about';
import Education from './components/Education/education';
import Experience from './components/Experience/experience';
import Skills from './components/Skills/skills';
import Project from './components/Project/project';
import Touch from './components/Touch/touch';

function App() {
  return (
    <div className="App">
      <Background />
      <Navbar />
      <Intro/>
      <About/>
      <Education/>
      <Experience/>
      <Skills/>
      <Project/>
      <Touch/>
    </div>
  );
}

export default App;
