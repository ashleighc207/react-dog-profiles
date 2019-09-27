import React, { Component } from "react";
import dogs from "../Models/dogs.js";

class DogContent extends Component {
  render() {
    let selectedDog = dogs.filter(d => {
      return d.name === this.props.match.params.id;
    });
    return (
      <section className="DogContent--profile">
        <div className="DogContent--img_container">
          <img
            className="DogContent--img"
            src={selectedDog[0].img}
            alt={`Dog named ${selectedDog[0].name}`}
          />
        </div>
        <p className="DogContent--name">{selectedDog[0].name}</p>
      </section>
    );
  }
}
export default DogContent;
