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
    const dataClass = location.pathname.match(/^\/data/) ? "active" : "";
    const mapsClass = location.pathname.match(/^\/maps/) ? "active" : "";
    const refugeFormPageClass = location.pathname.match(/^\/refugeFormPage/) ? "active" : "";
    const centerFormPageClass = location.pathname.match(/^\/centerFormPage/) ? "active" : "";
    const refugeeProfileClass = location.pathname.match(/^\/refugeeprofile/) ? "active" : "";
    const centerProfileClass = location.pathname.match(/^\/centerprofile/) ? "active" : "";

    return (
    <nav class="navbar navbar-default navbar-fixed-top">
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
            <li class="dataClass">
                <Link to='data'>
                    <span class='glyphicon glyphicon-education'></span> Data
                </Link>
            </li>
            <li class="mapsClass">
                <Link to='maps'>
                    <span class='glyphicon glyphicon-globe'></span> Maps
                </Link>
            </li>
            <li class="refugeFormPageClass">
                <Link to='refugeFormPage'>
                    <span class='glyphicon glyphicon-globe'></span> refugeForm
                </Link>
            </li>
            <li class="centerFormPageClass">
                <Link to='centerFormPage'>
                    <span class='glyphicon glyphicon-globe'></span> centerForm
                </Link>
            </li>
            <li class="refugeeProfileClass">
                <Link to='refugeeprofile'>
                    <span class='glyphicon glyphicon-globe'></span> refugeeProfile
                </Link>
            </li>
            <li class="centerProfileClass">
                <Link to='centerprofile'>
                    <span class='glyphicon glyphicon-globe'></span> centerprofile
                </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
  }
}
