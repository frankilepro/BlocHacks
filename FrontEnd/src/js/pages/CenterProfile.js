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
            user: this.props.user,
            data: {}
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
        fetch("https://teamguenonwebapi.azurewebsites.net/api/centreset/"+center.centreId)
        .then(function(res){
            return res.json();
        })
        .then(function(json){
            console.log(json);
            this.setState({
                data: json.refugee
            })
        }.bind(this))

    }

    showRefugees() {
        let rows = [];
        for(var i = 0;i<this.state.data.length;i++){
            rows.push( 
                <tr>
                    <td>{this.state.data[i].firstName}</td>
                    <td>{this.state.data[i].secondName}</td>
                    <td>{this.state.data[i].email[0].emailAddress  }</td>
                    <td>{this.state.data[i].address[0].addressFullName}</td>
                    <td>{this.state.data[i].phone[0].phoneNumber}</td>
                </tr>
            );
        }
        return <tbody>{rows}</tbody>
        /*let data = this.state.data;
        console.log(data);
        for(var i = 0; i < data.length; i++){
        let text = "name: " + data[i].firstName + ", id : ";
        rows.push(<h1 key={i} style={{backgroundColor:"yellow"}}>{text}<br></br></h1>);
        }
        return <div>{rows}</div>;*/
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
        <table class="table table-hover">
        <thead><tr>
            <th>Name</th>
            <th>Second Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
        </tr></thead>
            {this.showRefugees()}
        </table>
    </div>
    );
  }
}