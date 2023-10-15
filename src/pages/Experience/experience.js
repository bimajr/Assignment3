import React, { Component } from "react";
import "./experience.css";

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      experiences: [
        {
          title: "Study Independent",
          company: "PT. Hacktivate Teknologi Indonesia",
          location: "South Jakarta",
          startDate: "August 14, 2023",
          endDate: "Present",
          description: "React And React Native For Front End Developer.",
        },
      ],
    };
  }

  render() {
    return (
      <div id="experience">
        <span className="experienceTitle">My Experience</span>
        {this.state.experiences.map((experience, index) => (
          <div key={index} className="experience-item">
            <h3>{experience.title}</h3>
            <p>
              {experience.company} - {experience.location}
            </p>
            <p>
              {experience.startDate} - {experience.endDate}
            </p>
            <p>{experience.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Experience;
