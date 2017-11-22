import React from "react";
import { IndexLink, Link } from "react-router";

$(document).on('click', function(event){
  var $clickedOn = $(event.target),
      $collapsableItems = $('.collapse'),
      isToggleButton = ($clickedOn.closest('.navbar-toggle').length == 1),
      isLink = ($clickedOn.closest('a').length == 1),
      isOutsideNavbar = ($clickedOn.parents('.navbar').length == 0);

  if( (!isToggleButton && isLink) || isOutsideNavbar ) {
    $collapsableItems.each(function(){
      $(this).collapse('hide');
    });
  }
});

export default class Nav extends React.Component {
  render() {
    const { location } = this.props;
    const featuredClass = location.pathname === "/" ? "active" : "";
    const archivesClass = location.pathname.match(/^\/archives/) ? "active" : "";
    const mapsClass = location.pathname.match(/^\/maps/) ? "active" : "";

    return (
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>                        
          </button>
          <IndexLink class='navbar-brand' to='/'>aspCoreTest</IndexLink>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
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
        </div>
      </div>
    </nav>
    );
  }
}
