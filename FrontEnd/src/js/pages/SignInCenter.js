import React from 'react';
import {Link} from 'react-router';

export var center = {};

export default class SignInCenter extends React.Component {
    componentDidMount() {
        $('#redirect-center').hide();
    }

    submit = (e) => {
        e.preventDefault();
        let id = $("#id-center").val();
        console.log(id);
        let API_URL="http://teamguenonwebapi.azurewebsites.net/api/centreset/"+id;
        fetch(API_URL)
        .then(function(response){
            console.log(response);
            return response.json();
        })
        .then(function(json){
            center = json;
            console.log(center);
            $('#redirect-center').show();
        });
        
    }

    render() {
        return(
        <div>
            <div className="col-md-3"></div>
            <div className="col-md-6">
                <div className="form-group">
                    <form onSubmit={this.submit}>
                        <label for="id-center">Center Id</label>
                        <input id="id-center" placeholder="id" class="form-control"></input>
                        <div onClick={this.submit}>asd
                        </div>
                    </form>
                    <button id="redirect-center" ref={button => this.buttonElement = button}>
                        <Link to="/centerprofile">GO</Link>
                    </button>
                </div>
            </div>
            <div className="col-md-3"></div>
        </div>
        );
    }
}