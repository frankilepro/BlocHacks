import React from "react";
import GoogleMapsLoader from 'google-maps';

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

  render() {
    let address = "(center address)";
    let email = "(center email)";
    let phone = "(center phone)";

    return (
    <div>
        <h1>(Center Name)</h1>
        <br></br>
        <br></br>
        <div class="row" style={{paddingBottom:"50px"}}>
            <div class="col-sm-6 brdright show-info">
                <div class="info">Address : {address}</div>
                <div class="info">E-mail : {email}</div>
            </div>
            <div class="col-sm-6">
                <div class="info">Talked languages : (languages)</div>
                <div class="info">Phone number : {phone}</div>
            </div>
        </div>
        <div class="row"><div id="map"></div></div>
    </div>
    );
  }
}