import React from "react";
import "./home.css";
import bg from "../../assets/image.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section id="home">
      <div className="introContent">
        <span className="hello">Hello</span>
        <span className="introText">
          I'm <span className="introName">Bima</span> <br /> Website Portfolio
        </span>
        <p className="IntroPara">isi paragraf</p>
        <Link>
          <button className="btn">Hire Me</button>
        </Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Home;
