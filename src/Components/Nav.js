import React, { Component } from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import dogs from "../Models/dogs.js";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: []
    };
  }
  componentDidMount() {
    this.setState({
      links: dogs.map(d => {
        return (
          <NavLink
            to={`/dogs/${d.name}`}
            key={d.name}
            activeClassName="Nav--link_active"
            className="Nav--link"
          >
            {d.name}
          </NavLink>
        );
      })
    });
  }

  render() {
    return (
      <nav className="Nav">
        <NavLink exact to={`/`} className="Nav--link">
          <i className="Nav--icon fas fa-paw"></i>
        </NavLink>
        {this.state.links}
      </nav>
    );
  }
}
export default Nav;
