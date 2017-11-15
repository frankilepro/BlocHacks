import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <nav className='navbar navbar-inverse navbar-static-top'>
            <div className='navbar-header'>
                <Link className='navbar-brand' to={'/'}>aspCoreTest</Link>
            </div>
            <ul className='nav navbar-nav'>
                <li>
                    <NavLink to={'/'} exact activeClassName='active'>
                        <span className='glyphicon glyphicon-home'></span> Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/counter'} activeClassName='active'>
                        <span className='glyphicon glyphicon-education'></span> Counter
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/fetchdata'} activeClassName='active'>
                        <span className='glyphicon glyphicon-th-list'></span> Fetch data
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/Test1'} activeClassName='active'>
                        <span className='glyphicon glyphicon-search'></span> Test1
                    </NavLink>
                </li>
            </ul>
        </nav>;
    }
}
