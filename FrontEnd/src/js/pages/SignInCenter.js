import React from 'react';
import {Link} from 'react-router';

export var center = {};

export default class SignInCenter extends React.Component {
    componentDidMount() {
        $('#redirect-center').hide();
    }

    submit = (e) => {
        e.preventDefault();
        let id =$("#login-center").val();
        let login = $("#login-center").val();
        let passwd = $("#center-password").val();
        let API_URL="http://teamguenonwebapi.azurewebsites.net/api/centreset/" + id;

        fetch(API_URL)
        .then(function(response){
            console.log(response);
            return response.json();
        })
        .then(function(json){
            center = json;
            console.log(center);
            window.location.href = $('#redirect-center > a').attr('href');
        });
        
    }

    render() {
        return(
        <div  className="centerSignIn-background">
            <div className="col-md-3 signInCenterSiders">
                <Link to="/">
                    <div className="back">
                        <div className="centertext"><span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span> Back</div>
                    </div>
                </Link>
            </div>
            <div className="col-md-6 signInCenter">
                <div className="form-group">
                    <form onSubmit={this.submit}>
                        <p className="bigHeader">Center Sign In</p>
                        <input id="login-center" placeholder="Id" class="form-control margin-bottom-sm"></input>
                        <input id="center-password" type="password" placeholder="Password" class="form-control margin-bottom-sm"></input>
                        <button type="button" class="btn btn-primary btn-lg" onClick={this.submit} >Connection</button>
                    </form>
                    <button class="btn btn-default" id="redirect-center" >
                        <Link to="/centerprofile">_</Link>
                    </button>
                </div>
            </div>
            <div className="col-md-3 signInCenterSiders"></div>
        </div>
        );
    }
}