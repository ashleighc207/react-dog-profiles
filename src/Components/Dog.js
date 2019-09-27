import React, { Component } from "react";
import "./Dog.css";

class Dog extends Component {
  render() {
    return (
      <section className="Dog--profile">
        <div className="Dog--img_container">
          <img
            className="Dog--img"
            src={this.props.img}
            alt={`Dog named ${this.props.name}`}
          />
        </div>
        <p className="Dog--name">{this.props.name}</p>
      </section>
    );
  }
}

export default Dog;
