import React from "react";
import GoogleMapsLoader from 'google-maps';

import {center} from "./SignInCenter";

GoogleMapsLoader.KEY='AIzaSyBMHvTTCHmsNnI-EvP4Rq1VPQQjmr_aWNg';
GoogleMapsLoader.LANGUAGE='en';
GoogleMapsLoader.REGION='CA';

export default class CenterProfile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: this.props.user
        }
    }

    componentDidMount(){
        GoogleMapsLoader.load(function(google){
            var coordinates=new google.maps.LatLng(center.lattitude, center.longitute);
            console.log(coordinates);
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

  render() {
    return (
    <div>
        <h1>{center.name}</h1>
        <br></br>
        <br></br>
        <div class="row" style={{paddingBottom:"50px"}}>
            <div class="col-sm-6 brdright show-info">
                <div class="info">Address : {center.fullAddressName}</div>
                <div class="info">E-mail : {center.email}</div>
            </div>
            <div class="col-sm-6">
                <div class="info">Talked languages : {center.languages}</div>
                <div class="info">Phone number : {center.phoneNumer}</div>
            </div>
        </div>
        <div class="row"><div id="map"></div></div>
    </div>
    );
  }
}