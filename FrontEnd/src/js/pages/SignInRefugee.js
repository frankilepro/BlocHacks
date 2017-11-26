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
        <div class="row">
        <div class="col-sm-4"></div>
        <div class="col-sm-4">
            <form onSubmit={this.submit}>
                <input id="id-refugee" placeholder="id"></input>
                <div onClick={this.submit}>asd
                </div>
            </form>
            <button class="btn btn-default" id="redirect-refugee" >
                <Link to="/refugeeprofile"></Link>
            </button>
            </div>
        <div class="col-sm-4"></div>
        </div>
        );
    }
}