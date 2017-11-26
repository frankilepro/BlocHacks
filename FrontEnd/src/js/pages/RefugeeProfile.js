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
        let API_CLOSEST="http://teamguenonwebapi.azurewebsites.net/api/centreset/closest/"+user.refugeeId;
        console.log(API_CLOSEST);
        let closestArray = $.get(API_CLOSEST, function(res){
            $(".modify-info").hide();
            GoogleMapsLoader.load(function(google){
                var coordinates=new google.maps.LatLng(user.address[0].lattitude, user.address[0].longitude);
                var map = new google.maps.Map(document.getElementById('map'), {
                    center: coordinates,
                    zoom:10
                });
                var marker1 = new google.maps.Marker({
                    position: coordinates,
                    map:map
                });
                var marker2 = new google.maps.Marker({
                    position: new google.maps.LatLng(res[0].lattitude,res[0].longitute),
                    map:map
                });
                var marker3 = new google.maps.Marker({
                    position: new google.maps.LatLng(res[1].lattitude,res[1].longitute),
                    map:map
                });
                var marker4 = new google.maps.Marker({
                    position: new google.maps.LatLng(res[2].lattitude,res[2].longitute),
                    map:map
                });
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

        if(email!=user.email[user.email.length-1].emailAddress){
            user.email[user.email.length-1].emailAddress = email;
        }

        if(phone!=user.phone[user.phone.length-1].phoneNumber){
            user.phone[user.phone.length-1].phoneNumber = phone;
        }

        if(address!=user.address[user.address.length-1].addressFullName){
            user.address[user.address.length-1].addressFullName = address;
        }

        console.log(user.email);
        
        let API_URL = "http://teamguenonwebapi.azurewebsites.net/api/emailset/";
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": API_URL,
            "method": "POST",
            "headers": {
            "content-type": "application/json"
            },
            "data": JSON.stringify(user.email[user.email.length-1])
        }
        
        $.ajax(settings).done(function (response) {
            console.log(response);
        });

        this.modify();
    }

  render() {
      console.log(user);
      if($.isEmptyObject(user)){
          console.log("emptyuser");
          return (
            <button id='redirect-to-signin'>
                {window.location.href = "#/signinrefugee"}
            </button>
          );
      }
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
                    <div class="info">Address : <input class="form-control" id='input-address' defaultValue={user.address[user.address.length-1].addressFullName}></input></div>
                    <div class="info">E-mail : <input class="form-control" id='input-email' defaultValue={user.email[user.email.length-1].emailAddress}></input></div>
                    <div class="info">Phone number : <input class="form-control" id='input-phone' defaultValue={user.phone[user.phone.length-1].phoneNumber}></input></div>
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
