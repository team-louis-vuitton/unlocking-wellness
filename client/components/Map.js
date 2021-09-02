import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import ReactDOM from 'react-dom';
import ReactDependentScript from 'react-dependent-script';
import React, { useState, useEffect } from 'react';
import styles from '../styles/Map.module.css';


const MapContainer = (props) => {

  const [hovered, setHovered] = useState(1)

  const mapStyles = {
    // height: "60vh",
    // width: "70%",
    // marginRight:'5vh',
    float:'right',
    height: '60vh',
    width: "70%",
  };

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

  const center = {
    lat: 37.548619, lng: -121.973907
  };

  const options = { closeBoxURL: '', enableEventPropagation: true };

  const changeSelected = (name) => {
    setHovered(name)
  }

  return (
    <>

<div id={styles.menuC}>
      <ul id={styles.menu}>
        {props.data.map((item, index)=> {
          if (hovered === index){
            return (
            <li className={styles.provider} style={{color:'red', backgroundColor: '#ece7df', height:'100%'}} onMouseOver={()=>{setHovered(index);console.log(index)}}>
              <p>{item.name} {index}</p>
              <p>{item.categories[0].title}</p>
              <p>{item.location.city}</p>
            </li>
            )
          }
          return (
            <li className={styles.provider} style={{color:'blue', height:'100%'}} onMouseOver={()=>{setHovered(index);console.log(index)}}>
              <p>{item.name} {index}</p>
              <p>{item.categories[0].title}</p>
              <p>{item.location.city}</p>

          </li>
          )
        })}
      </ul>
      </div>



     <LoadScript id={styles.ma}
       googleMapsApiKey='AIzaSyD2iVGnhGjAc6dU4HGPrYQwgwAKuFeqwjI'>

        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
          onLoad={map => {
            map.fitBounds(bounds);
          }}
        >


    <InfoWindow
      position={{lat: 37.548619,lng: -121.973907}}>
        <div>Hello</div>
      </InfoWindow>




         {props.data.map((item, index)=> {
           console.log(item.coordinates.latitude, item.coordinates.londgitude);
           let location = {lat: item.coordinates.latitude, lng:item.coordinates.longitude}
           console.log(location)
           if (hovered === index){

           return(
           <Marker key={item.name} position={location} label={item.name}
           onMouseOver={()=>{setHovered(index);console.log(index)}}
           // onClick={()=>{changeSelected(item.name)}}
          onClick={(e)=>console.log(e)}/>
          // onClick={(e)=>alert(e)}
           )
           }
            else{
              return(
              <Marker key={item.name} position={location}
              // label={'thing'}

           onMouseOver={()=>{setHovered(index);console.log(index)}}
           // onClick={()=>{changeSelected(item.name)}}
          onClick={(e)=>console.log(e)}/>
              )
            }


         }

         )}
        </GoogleMap>
     </LoadScript>


  </>
  )
}
export default MapContainer;
