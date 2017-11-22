import React from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class Maps extends React.Component {
  render() {
    return (
      <Map 
      style={{height:"400px"}} 
      google={this.props.google} 
      zoom={14}
      initialCenter={{
        lat:45.5044,
        lng:-73.6129
      }}
      >

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{"allo"}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyBMHvTTCHmsNnI-EvP4Rq1VPQQjmr_aWNg")
})(Maps)
 