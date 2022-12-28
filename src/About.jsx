import React from "react";
import Fade from 'react-reveal/Fade';
import shr from './images/shr.png'

const About = () => {
  return (
    <>
      <section id="about">
        <div className="about_div">
          <Fade top>
            <div className="cols_div">
              <div className="imgdiv">
                <img src={shr} alt="shruti" className="shr_img" />
              </div>
              <h1 className="hello">Hello,</h1>
              <h2 className="shruti">I'm Shruti Yadav</h2>
              <div className="intro">
                <p className="intro1">
                  I am a passionate Computer Science enthusiast pursuing a Bachelor of Technology at ABES Engineering College. I am proficient in Data Structures and Algorithms in C++. I also have a command of Python, Flask framework, HTML, CSS, Bootstrap, Javascript, and React.js, SQL. I'm keenly interested in Web Development.
                </p>
                <p className="intro1" id="para2">
                  I am a hard-working individual with a strong passion for software development. Seeking opportunities to use proven skills in leadership, debugging, and coding to meet business needs at Meed. I have also been the GDSC ABES EC Lead for the session 2021-22, where I have conducted various technical events and guided over 250 students.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </section>
    </>
  );
}

export default About;