import React from "react";
import GoogleMapsLoader from 'google-maps';

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
        let address = $('#input-address').val();
        let email =  $('#input-email').val();
        let phone =  $('#input-phone').val();
        console.log(JSON.stringify({email:email, address:address, phone:phone}));
        //post
        this.modify();
    }

  render() {
    let address = "(refugee address)";
    let email = "(refugee email)";
    let phone = "(refugee phone)";

    return (
    <div>
        <h1>(Refugee Name)</h1>
        <br></br>
        <br></br>
        <div class="row" style={{paddingBottom:"50px"}}>
            <div class="col-sm-6 brdright show-info">
                <div class="info">Address : {address}</div>
                <div class="info">E-mail : {email}</div>
                <div class="info">Phone number : {phone}</div>
                <br></br>
                <button class="btn btn-default" onClick={this.modify}>Modify my informations</button>
            </div>
            <div class="col-sm-6 brdright modify-info">
                <form>
                    <div class="info">Address : <input class="form-control" id='input-address' defaultValue={address}></input></div>
                    <div class="info">E-mail : <input class="form-control" id='input-email' defaultValue={email}></input></div>
                    <div class="info">Phone number : <input class="form-control" id='input-phone' defaultValue={phone}></input></div>
                    <br></br>
                    <button class="btn btn-default" onClick={this.modify}>Cancel</button>
                    <button class="btn btn-default" onClick={this.update}>Update</button>
                </form>
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
