import React from "react";
import GoogleMapsLoader from 'google-maps';

GoogleMapsLoader.KEY='AIzaSyBMHvTTCHmsNnI-EvP4Rq1VPQQjmr_aWNg';
GoogleMapsLoader.LANGUAGE='en';
GoogleMapsLoader.REGION='CA';

export default class RefugeeProfile extends React.Component {
    constructor() {
        super();
        this.state = {
            modifying : false
        }
    }

    componentDidMount(){
        $(".modify-info").hide();
        GoogleMapsLoader.load(function(google){
            var poly_coordinates=new google.maps.LatLng(45.5044, -73.6129); //enleve la ligne
            var map = new google.maps.Map(document.getElementById('map'), {
                center: poly_coordinates, //user.center.cords
                zoom:15
            });
            var marker = new google.maps.Marker({
                position: poly_coordinates, //user.center.cords
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

    update (){
        console.log("sent");
    }

  render() {
    return (
    <div>
        <h1>(Refugee Name)</h1>
        <br></br>
        <br></br>
        <div class="row" style={{paddingBottom:"50px"}}>
            <div class="col-sm-6 brdright show-info">
                <div class="info">Address : (boogie address)</div>
                <div class="info">E-mail : (refugee email)</div>
                <div class="info">Phone number : (refugee phone)</div>
                <br></br>
                <button class="btn btn-default" onClick={this.modify}>Modify my informations</button>
            </div>
            <div class="col-sm-6 brdright modify-info">
                <div class="info">Address : <input placeholder="(refugee address)"></input></div>
                <div class="info">E-mail : <input placeholder="(refugee email)"></input></div>
                <div class="info">Phone number : <input placeholder="(refugee number)"></input></div>
                <br></br>
                <button class="btn btn-default" onClick={this.modify}>Cancel</button>
                <button class="btn btn-default" onClick={this.update}>Update</button>
            </div>
            <div class="col-sm-6">
                <div class="info">Refugee center : (refugee center)</div>
                <div class="info">Birth date : (refugee birth date)</div>
            </div>
        </div>
        <div class="row"><div id="map"></div></div>
    </div>
    );
  }
}
