import React from "react";
import "./interest.css";

class Interest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          name: "Front-End Developers",
          description:
            "Front-end Developers are skilled IT professionals who specialize in creating and designing the user interface of web applications. They combine technical expertise with creative flair to deliver seamless and visually appealing digital experiences.",
          projects: [
            {
              name: "JR Play",
              description:
                "This project is a front-end development for a website application dedicated to displaying the most popular music in the past week. It involves crafting an intuitive and engaging user interface to provide users with a delightful music exploration experience.",
            },
            {
              name: "Buffalo Hill Tourism",
              description:
                "This project aims to develop a website promoting Kebo Hill Tourism in Balikpapan, showcasing its attractions and offerings. It involves creating an immersive online platform that captures the essence and beauty of Kebo Hill, enticing visitors to explore its wonders.",
            },
            // ...
          ],
        },
        {
          name: "UI/UX Designer",
          description:
            "UI/UX Designers are professionals responsible for conceptualizing and crafting the user interface (UI) and user experience (UX) of digital products or applications, such as websites, mobile apps, and software. They blend creative design thinking with user-centric approaches to deliver intuitive and visually appealing interfaces.",
          projects: [
            {
              name: "Jam's Form",
              description:
                "This project aims to design the user interface (UI) and user experience (UX) of a survey application that offers rewards in the form of prizes to participating users. It involves creating an engaging and seamless survey-taking experience, ensuring user satisfaction and participation.",
            },
            {
              name: "Kidz Avenue",
              description:
                "This project aims to create a convenient and efficient shopping experience for mothers with young children, with a focus on a children's clothing store theme. The main objective is to provide a user-friendly platform that enables mothers to browse and purchase children's clothing with ease, eliminating the need for physical store visits.",
            },
            // ...
          ],
        },
        // ...
      ],
    };
  }

  render() {
    return (
      <div className="interest">
        <span className="interestTitle">Interest</span>
        <div className="front-end">
          {this.state.categories
            .filter((category) => category.name === "Front-End Developers")
            .map((category) => (
              <div className="category-container" key={category.name}>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                <ul>
                  {category.projects.map((project) => (
                    <div className="project" key={project.name}>
                      <h4>{project.name}</h4>
                      <p>{project.description}</p>
                    </div>
                  ))}
                </ul>
              </div>
            ))}
        </div>
        <div className="ui-ux">
          {this.state.categories
            .filter((category) => category.name === "UI/UX Designer")
            .map((category) => (
              <div className="category-container" key={category.name}>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                <ul>
                  {category.projects.map((project) => (
                    <div className="project" key={project.name}>
                      <h4>{project.name}</h4>
                      <p>{project.description}</p>
                    </div>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default Interest;
