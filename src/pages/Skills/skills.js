import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/web-design.png";
import Databases from "../../assets/database.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">My Skills</span>
      <span className="skillDesc">
        I am a skilled and passionate web designer with experience
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>Expert in creating user-friendly interfaces and experiences.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Front End Development</h2>
            <p>Proficient in building interactive and responsive websites.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={Databases} alt="Databases" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Database Management</h2>
            <p>Skilled in designing and managing databases for applications.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
