import React from 'react';
import {Link} from 'react-router';

export var user = {};

export default class SignInRefugee extends React.Component {
    componentDidMount() {
        $('#redirect').hide();
    }

    submit = (e) => {
        e.preventDefault();
        let id = $("#id-asd").val();
        let API_URL="http://teamguenonwebapi.azurewebsites.net/api/refugeeset/"+id;
        fetch(API_URL)
        .then(function(response){
            return response.json();
        })
        .then(function(json){
            user = json;
            console.log(user);
            $('#redirect').show();
        });
    }

    render() {
        return(
        <div>
        <form onSubmit={this.submit}>
            <input id="id-asd" placeholder="id"></input>
            <div onClick={this.submit}>asd
            </div>
        </form>
        <button id="redirect" >
            <Link to="/refugeeprofile">GO</Link>
        </button>
        </div>
        );
    }
}