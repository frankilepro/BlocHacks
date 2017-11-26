import React from "react";
import {Link} from 'react-router';

export default class SignIn extends React.Component {
    render() {
        return (
            
            <div class="jumbotron jumbotron-background">
            <div class="container">
                <div>
                <h1 className="signInHeader mg-top-big">Welcome to Canada</h1>
                <p className="signInInfo">Facilitate the tracking of your information! You are a...</p>
                
                <div class="row">
                <div class="col-sm-3"></div>
                <div class="col-sm-6">
                    <div class="col-sm-6">
                        <Link to="/signinrefugee">
                            <div className="signIn">
                                <div className="verticalAlign">Refugee</div>
                            </div>
                        </Link>
                    </div>

                    <div class="col-sm-6 mg-bot-big">
                        <Link to="/signincenter">
                            <div className="signIn">
                                <div className="verticalAlign">Center</div>
                            </div>
                        </Link>
                    </div>
                    <p className="signInInfo centertext">Didn't register your center yet ?</p>
                    <div class="col-sm-4"></div>
                    <div class="col-sm-4">
                        <Link to="/centerformpage">
                            <div className="signCenterRefugee">
                                <div className="verticalAlign">Contact-us</div>
                            </div>
                        </Link>
                    </div>
                    <div class="col-sm-4"></div>
                </div>
                    <div class="col-sm-3"></div>
                </div>
            </div>
            </div>
          </div>
        );
  }
}
