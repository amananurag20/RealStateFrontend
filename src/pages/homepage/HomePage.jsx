import React from "react";
import "./HomePage.scss";
import SearchBar from "../../components/searchBar/SearchBar";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get your Dream place</h1>
          <p>
            This real estate site isnt just your average platform for booking
            hotels and rooms; its a game-changer in the world of accommodation.
            Offering a seamless experience, its your go-to destination for
            finding the perfect place to stay, whether you are traveling for
            business or pleasure.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="bg-img" />
      </div>
    </div>
  );
};

export default HomePage;
