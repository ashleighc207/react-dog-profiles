import React, { Component } from "react";
import dogs from "../Models/dogs.js";
import "./DogContent.css";

class DogContent extends Component {
  render() {
    let selectedDog = dogs.filter(d => {
      return d.name === this.props.match.params.id;
    });
    return (
      <section className="DogContent">
        <div className="DogContent--img_container">
          <img
            className="DogContent--img"
            src={selectedDog[0].img}
            alt={`Dog named ${selectedDog[0].name}`}
          />
        </div>
        <p className="DogContent--name">{selectedDog[0].name}</p>
        <ul className="DogContent--fact_list">
          {selectedDog[0].facts.map(f => {
            return <li className="DogContent--fact">{f}</li>;
          })}
        </ul>
      </section>
    );
  }
}
export default DogContent;
