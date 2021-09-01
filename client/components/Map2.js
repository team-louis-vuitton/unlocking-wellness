import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import ReactDOM from 'react-dom';
import ReactDependentScript from 'react-dependent-script';
import React, { Component, useState, useEffect } from 'react';



// const MapContainer2 = (props) => {

//   const mapStyles = {
//     height: "60vh",
//     width: "100%",
//     marginRight:'5vh'};

//   const defaultCenter = {
//     lat: 37.548619, lng: -121.973907
//   }


//   useEffect(() => {
//     initMap();
//   },[])

//   const initMap = function(){
//     let options = {
//       zoom: 3,//this.props.zoom,
//       center: { lat: 40, lng: -72 },//this.props.center,
//       mapTypeId: google.maps.MapTypeId.ROADMAP
//     };
//     let bounds = new google.maps.LatLngBounds();
//     bounds.extend({ lat: 41, lng: -74 });
//     bounds.extend({ lat: 42, lng: -88 });

//     let map = new window.google.maps.Map(
//       document.getElementById('map2'),
//       options
//     );

//     map.fitBounds(bounds);
//   }

//   return (
//       <div id="map2" />
//   )
// }

export default class MapContainer2 extends Component {
  componentDidMount() {
    this.initMap();
  }

  initMap() {

    let bounds = new google.maps.LatLngBounds();
    bounds.extend({ lat: 38, lng: -82 });
    bounds.extend({ lat: 41, lng: -72 });

    let options = {
      zoom: this.props.zoom,
      center: this.props.center,
      // panToBounds: bounds
      // mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    let map = new window.google.maps.Map(
      document.getElementById('map'),
      options
    );

    const marker = new google.maps.Marker({
      position: { lat: 38, lng: -81 },
      map: map,
    });
    map.fitBounds({east:-72, north:41, south:32, west:-78});

    // map.fitBounds(bounds);
  }

  render() {
    return <div id="map" />;
  }
}

// export default MapContainer2;
