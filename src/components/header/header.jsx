import React from "react";
import rickandmorty from "../../assets/rickandmorty-large.png";
import "./header.css";

const Header = () => {
  return (
    <div className="gpt3__header section__padding gradient__bg" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          {" "}
          Take the time to play the right notes...
        </h1>
        <p>Send me a message:</p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your message..."></input>
          <button type="button">Send</button>
        </div>

        <div className="gpt3__header-image">
          <img src={rickandmorty} alt="rick and morty" />
        </div>
      </div>
    </div>
  );
};

export default Header;
