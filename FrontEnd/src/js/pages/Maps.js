import React from "react";
import GoogleMapsLoader from 'google-maps';

GoogleMapsLoader.KEY='AIzaSyBMHvTTCHmsNnI-EvP4Rq1VPQQjmr_aWNg';
GoogleMapsLoader.LANGUAGE='fr';
GoogleMapsLoader.REGION='CA';

export default class Maps extends React.Component {
    componentDidMount(){
        GoogleMapsLoader.load(function(google){
            var poly_coordinates=new google.maps.LatLng(45.5044, -73.6129);
            var map = new google.maps.Map(document.getElementById('map'), {
                center: poly_coordinates,
                zoom:15
            });
            var marker = new google.maps.Marker({
                position: poly_coordinates,
                map:map
            });
        });
    }

  render() {
    return (    
     <div id="map">
     </div>
    );
  }
}
