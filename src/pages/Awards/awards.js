import React from "react";
import "./awards.css";

const Awards = () => {
  const awardsData = [
    {
      year: 2016,
      name: "1st Place Futsal",
      description: "Champion in the futsal competition of 2016.",
    },
    {
      year: 2017,
      name: "2nd Place Futsal",
      description:
        "Secured the second position in the futsal competition of 2017.",
    },
    {
      year: 2017,
      name: "Best Player Award",
      description: "Recognized as the best player in the competition of 2017.",
    },
    {
      year: 2023,
      name: "3rd Place Futsal",
      description:
        "Achieved the third position in the futsal competition of 2023.",
    },
  ];

  return (
    <div>
      <span className="awardsTitle">Awards List</span>
      <div className="awardsTableContainer">
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Award Name</th>
              <th>Brief Description</th>
            </tr>
          </thead>
          <tbody>
            {awardsData.map((award, index) => (
              <tr key={index}>
                <td>{award.year}</td>
                <td>{award.name}</td>
                <td>{award.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Awards;
