import React from 'react';
import { Link, NavLink } from 'react-router';

class NavMenu extends React.Component {
    render: function() {
        return (
            <div class="nav-menu">
                <nav class='navbar navbar-inverse navbar-static-top'>
                    <div class='navbar-header'>
                        <Link class='navbar-brand' to={'/'}>aspCoreTest</Link>
                    </div>
                    <ul class='nav navbar-nav'>
                        <li>
                            <NavLink to={'/'} exact activeclass='active'>
                                <span class='glyphicon glyphicon-home'></span> Home
                    </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/counter'} activeclass='active'>
                                <span class='glyphicon glyphicon-education'></span> Counter
                    </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/fetchdata'} activeclass='active'>
                                <span class='glyphicon glyphicon-th-list'></span> Fetch data
                    </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/Test1'} activeclass='active'>
                                <span class='glyphicon glyphicon-search'></span> Test1
                    </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}
