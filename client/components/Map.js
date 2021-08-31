import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import ReactDOM from 'react-dom';
import ReactDependentScript from 'react-dependent-script';
import React, { useState, useEffect } from 'react';



const MapContainer = (props) => {

  const mapStyles = {
    height: "60vh",
    width: "100%",
    marginRight:'5vh'};

  const defaultCenter = {
    lat: 37.548619, lng: -121.973907
  }

  let bounds={east:-80, north:41.8, south:38, west:-87}

  console.log(props.data)

  let coordinates = props.data.map(item=>item.coordinates)

  let coordsN = coordinates.reduce((a,c)=>(c.latitude > a.latitude ? c : a)).latitude
  let coordsS = coordinates.reduce((a,c)=>(c.latitude < a.latitude ? c : a)).latitude
  let coordsW = coordinates.reduce((a,c)=>(c.longitude < a.longitude ? c : a)).longitude
  let coordsE = coordinates.reduce((a,c)=>(c.longitude > a.longitude ? c : a)).longitude

  console.log('coordsN', coordsN)
  console.log('coordsS', coordsS)
  console.log('coordsE', coordsE)
  console.log('coordsW', coordsW)

  bounds = {east:coordsE, north:coordsN, south:coordsS, west:coordsW}



  return (
    <>
     <LoadScript
       googleMapsApiKey='AIzaSyD2iVGnhGjAc6dU4HGPrYQwgwAKuFeqwjI'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
          onLoad={map => {
            map.fitBounds(bounds);
          }}
        >

         {props.data.map(item=> {
           console.log(item.coordinates.latitude, item.coordinates.longitude);
           let location = {lat: item.coordinates.latitude, lng:item.coordinates.longitude}
           console.log(location)
           return(
           <Marker key={item.name} position={location}/>
           )
         }

         )}
        </GoogleMap>
     </LoadScript>
  </>
  )
}
export default MapContainer;
