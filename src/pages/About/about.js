import React from "react";
import "./about.css";
import AboutImg from "../../assets/about.png";

const About = () => {
  return (
    <section id="about">
      <div className="aboutContent">
        <div className="aboutTitle">About Us</div>
        <img src={AboutImg} alt="aboutImage" className="aboutImage" />
        <div className="aboutDesc">
          I am Arya Bhima Andika, a student in the Information Systems program
          at Universitas Mulawarman. I have a strong passion for web development
          and creating captivating and functional digital experiences.
        </div>
        <div className="aboutDesc">
          During my education, I have learned various programming languages such
          as HTML, CSS, and JavaScript. I also have experience in implementing
          responsive design and interactive functionality on websites.
        </div>
        <div className="aboutDesc">
          Some of my recent projects include building a personal portfolio
          website, an interactive blog, and a simple web application.
        </div>
      </div>
    </section>
  );
};

export default About;
