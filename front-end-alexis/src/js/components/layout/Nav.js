import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  render() {
    const { location } = this.props;
    const featuredClass = location.pathname === "/" ? "active" : "";
    const archivesClass = location.pathname.match(/^\/archives/) ? "active" : "";
    const mapsClass = location.pathname.match(/^\/maps/) ? "active" : "";

    return (
      <div class="nav-menu">
      <nav class='navbar navbar-inverse navbar-static-top'>
          <div class='navbar-header'>
              <IndexLink class='navbar-brand' to='/'>aspCoreTest</IndexLink>
          </div>
          <ul class='nav navbar-nav'>
              <li class="featuredClass">
                  <IndexLink to='/'>
                      <span class='glyphicon glyphicon-home'></span> Home
                  </IndexLink>
              </li>
              <li class="archivesClass">
                  <Link to='archives'>
                      <span class='glyphicon glyphicon-education'></span> Archives
                  </Link>
              </li>
              <li class="mapsClass">
                  <Link to='maps'>
                      <span class='glyphicon glyphicon-globe'></span> Maps
                  </Link>
              </li>
          </ul>
      </nav>
  </div>
    );
  }
}
