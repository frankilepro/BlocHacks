import React from 'react';
import {Link} from 'react-router';

export var user = {};
export var center = {};

export default class SignInRefugee extends React.Component {
    componentDidMount() {
        $('#redirect-refugee').hide();
    }

    submit = (e) => {
        e.preventDefault();
        let id = $("#id-refugee").val();
        let API_URL_REFUGEE="http://teamguenonwebapi.azurewebsites.net/api/refugeeset/"+id;
        fetch(API_URL_REFUGEE)
        .then(function(response){
            return response.json();
        })
        .then(function(json){
            user = json;
            console.log(user);
            let API_URL_CENTER="http://teamguenonwebapi.azurewebsites.net/api/centreset/"+user.centreId;
            fetch(API_URL_CENTER)
            .then(function(response){
                return response.json();
            })
            .then(function(json){
                center = json;
                console.log(center);
                window.location.href = $('#redirect-refugee > a').attr('href');
            });
        });

    }

    render() {
        return(
    <div  className="centerSignIn-background">
    <div className="col-md-3 signInCenterSiders">
        <Link to="/">
            <div className="back">
                <div className="centertext"> <span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span> Back</div>
            </div>
        </Link>
    </div>
    <div className="col-md-6 signInCenter">
        <div className="form-group">
            <form onSubmit={this.submit}>
                <p className="bigHeader">Sign In</p>
                <input id="refugee-username" type="text" placeholder="Username" class="form-control margin-bottom-sm"></input>
                <input id="refugee-password" type="password" placeholder="Password" class="form-control margin-bottom-sm"></input>
                <button type="button" class="btn btn-primary btn-lg" onClick={this.submit} >Sign In</button>
            </form>
            <button class="btn btn-default" id="redirect-refugee" >
                <Link to="/refugeeprofile">_</Link>
            </button>
        </div>
    </div>
    <div className="col-md-3 signInCenterSiders"></div>
    </div>

        );
    }
}