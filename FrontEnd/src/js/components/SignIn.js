import React from "react";
import {Link} from 'react-router';

export default class SignIn extends React.Component {
    render() {
        return (
        <div>
            <h1 style={{textAlign:"center"}}>Sign in as :</h1>
            <div class="row">
                <div class="col-sm-6">
                    <Link to="/refugeform">
                        <div id='signin'> Refugee </div>
                    </Link>
                </div>
                <div class="col-sm-6">
                    <Link to="/refugeform">
                        <div id='signin'> Center </div>
                    </Link>
                </div>
            </div>
        </div>
        );
  }
}
