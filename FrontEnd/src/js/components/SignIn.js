import React from "react";
import {Link} from 'react-router';

export default class SignIn extends React.Component {
    render() {
        return (

            <div class="jumbotron jumbotron-background">
            <div class="container">
                <div>
                <h1 style={{textAlign:"center"}}>Sign in as :</h1>
                <div class="row">
                <div class="col-sm-3"></div>
                    <div class="col-sm-3">
                        <Link to="/signinrefugee">
                            <div className="signIn">
                                <div className="verticalAlign">Refugee</div>
                            </div>
                        </Link>
                    </div>
                    <div class="col-sm-3">
                        <Link to="/centerformpage">
                            <div className="signIn">
                                <div className="verticalAlign">Center</div>
                            </div>
                        </Link>
                    </div>
                    <div class="col-sm-3"></div>
                </div>
            </div>
            </div>
          </div>
        );
  }
}
