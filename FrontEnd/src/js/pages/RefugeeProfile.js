import React from "react";
import GoogleMapsLoader from 'google-maps';

import {user} from './SignInRefugee';
import {center} from './SignInRefugee';

GoogleMapsLoader.KEY='AIzaSyBMHvTTCHmsNnI-EvP4Rq1VPQQjmr_aWNg';
GoogleMapsLoader.LANGUAGE='en';
GoogleMapsLoader.REGION='CA';

export default class RefugeeProfile extends React.Component {
    constructor() {
        super();    
        this.update = this.update.bind(this);
        this.state = {
            modifying : false
        }
    }

    componentDidMount(){

        $(".modify-info").hide();
        GoogleMapsLoader.load(function(google){
            var coordinates=new google.maps.LatLng(user.address[0].lattitude, user.address[0].longitude);
            var map = new google.maps.Map(document.getElementById('map'), {
                center: coordinates,
                zoom:15
            });
            var marker = new google.maps.Marker({
                position: coordinates,
                map:map
            });
        });
    }

    modify() {
        if($(".modify-info").is(":hidden")){
            $(".modify-info").show();
            $(".show-info").hide();
        }
        else{
            $(".modify-info").hide();
            $(".show-info").show();
        }
    }

    update = (e) => {
        e.preventDefault();
        let address = $('#input-address').val();
        let email =  $('#input-email').val();
        let phone =  $('#input-phone').val();
        console.log(JSON.stringify({email:email, address:address, phone:phone}));
        //post
        this.modify();
    }

  render() {
      console.log(user);
    return (
    <div>
        <h1>{user.firstName+ " " + user.secondName}</h1>
        <br></br>
        <br></br>
        <div class="row" style={{paddingBottom:"50px"}}>
            <div class="col-sm-6 brdright show-info">
                <div class="info">Address : {user.address[0].addressFullName}</div>
                <div class="info">E-mail : {user.email[0].emailAddress}</div>
                <div class="info">Phone number : {user.phone[0].phoneNumber}</div>
                <br></br>
                <button class="btn btn-default" onClick={this.modify}>Modify my informations</button>
            </div>
            <div class="col-sm-6 brdright modify-info">
                <form>
                    <div class="info">Address : <input class="form-control" id='input-address' defaultValue={user.address[0].addressFullName}></input></div>
                    <div class="info">E-mail : <input class="form-control" id='input-email' defaultValue={user.email[0].emailAddress}></input></div>
                    <div class="info">Phone number : <input class="form-control" id='input-phone' defaultValue={user.phone[0].phoneNumber}></input></div>
                    <br></br>
                    <button class="btn btn-default" onClick={this.modify}>Cancel</button>
                    <button class="btn btn-default" onClick={this.update}>Update</button>
                </form>
            </div>
            <div class="col-sm-6">
                <div class="info">Refugee center : {center.name}</div>
                <div class="info">Birth date : {user.dateOfBirth.substring(0,10)}</div>
            </div>
        </div>
        <div class="row"><div id="map"></div></div>
    </div>
    );
  }
}
