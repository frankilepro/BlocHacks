import React from "react";
import GoogleMapsLoader from 'google-maps';
import {Link} from 'react-router';

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

    showRefugees() {
        let rows = [];
        for(var i = 0; i < center.refugee.length; i++){
          let text = "name: " + center.refugee[i].firstName + ", id : " + center.refugee[i].id;
          rows.push(<h1 key={i} style={{backgroundColor:"yellow"}}>{text}<br></br></h1>);
        }
        return <div>{rows}</div>;
    }

  render() {
    if($.isEmptyObject(center)){
        console.log("emptycenter");
        return (
          <button id='redirect-to-signin'>
              {window.location.href = "#/signincenter"}
          </button>
        );
    }
    return (
    <div>
        <div class="row">
            <div class="col-sm-6">
                <h1>{center.name}</h1>
            </div>
            <div class="col-sm-6" style={{float:"right"}}>
                <button class="btn btn-default" style={{marginTop:"20px"}}><Link to="/refugeformpage">Add refugee</Link></button>
            </div>
        </div>
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
        {this.showRefugees()}
    </div>
    );
  }
}