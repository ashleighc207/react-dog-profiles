import React, { Component } from "react";
import "./Profiles.css";
import Dog from "./Dog.js";
import { Link } from "react-router-dom";
import dogs from "../Models/dogs.js";

class Profiles extends Component {
  render() {
    return (
      <div className="Profiles">
        {dogs.map(d => {
          return (
            <Link exact to={`/dogs/${d.name}`} key={d.id} className="Dog--link">
              <Dog name={d.name} id={d.id} img={d.img} />
            </Link>
          );
        })}
      </div>
    );
  }
}
export default Profiles;
