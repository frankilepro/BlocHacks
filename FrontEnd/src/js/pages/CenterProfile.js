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
          let theName =center.refugee[i].firstName;
          let theId =  center.refugee[i].id;
          if(!theId){
              theId = "N/D"
          }
          rows.push(<tr> <td>{theName}</td> <td>{theId}</td></tr>);
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
                <h1 className="bigHeaderBlack">{center.name}</h1>
            </div>
            <div class="col-sm-6">
                <button class="btn btn-default" style={{marginTop:"20px"}}><Link to="/refugeeformpage">Add refugee</Link></button>
            </div>
        </div>
        <br></br>
        <br></br>
        <div class="row" style={{paddingBottom:"50px"}}>
            <div class="col-sm-2"></div>
            <div class="col-sm-3 brdright show-info">
                <div class="info"><b>Address :</b> {center.fullAddressName}</div>
                <div class="info"><b>E-mail :</b> {center.email}</div>
            </div>
            <div class="col-sm-3">
                <div class="info"><b>Talked languages :</b> {center.languages}</div>
                <div class="info"><b>Phone number :</b> {center.phoneNumer}</div>
            </div>
            <div class="col-sm-4"></div>
        </div>
        <div class="row"><div id="map"></div></div>
        <table className="table table-hover">
            <tr> <th>Name</th> <th>ID</th></tr>
            {this.showRefugees()}
        </table>
    </div>
    );
  }
}