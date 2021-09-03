import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import styles from '../styles/Map.module.css';
import stylesModal from '../styles/Modal.module.css';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Modal from "react-modal";
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import certification from "../public/certification.png";
import payment from "../public/payment.png"
import Image from 'next/image';


const useStyles = makeStyles({
  root: {
    position: 'relative',
    width: '15rem',
    height: '26rem',
    borderRadius: 30,
    backgroundColor: '#A3B3A9',
    boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.25)',
    margin: '3% 3% 3% 3%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
media: {
  height: 140,
  },
button: {
  color: 'rgba(10, 9, 9, 0.67)',
    backgroundColor: 'rgb(236, 231, 223)',
    margin: '0 auto',
    marginBottom: '1rem',
    position: 'relative',
    marginLeft: '42px',
    marginBottom: '50px',
  },
starButton: {
  fontSize: '10px',
  position: 'absolute',
  bottom: '4%',
  left: '44%',
  zIndex: '5',
  color: 'yellow',
  cursor: 'pointer',
  backgroundColor: 'rgba(10, 9, 9, 0.67)',
  borderRadius: '50%',
  width: '2rem',
  height: '2rem',
  paddingLeft: '0.3rem',
  paddingTop: '0.3rem',
  },
name: {
  fontSize: '1.2rem',
}
});


const MapContainer = (props) => {
  const classes = useStyles();
  const [hovered, setHovered] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  // const [selectedProvider, setSelectedProvider] = useState({name:'',image_url:'', location:{}, display_phone:''})
  const [selectedProvider, setSelectedProvider] = useState({name:'',image_url:'', location:{}, display_phone:''})

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  const mapStyles = {
    height: '60vh',
    width: "100%",
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

    <div id={styles.thing} style={{marginBottom:'50px',marginTop:'50px',overflow: 'hidden', marginLeft:'5%', marginRight:'5%'}}>

<div id={styles.menuC}>
      <ul id={styles.menu}>
        {props.data.map((item, index)=> {
          if (hovered === index){
            return (
            <li className={styles.provider} style={{ backgroundColor: '#ece7df', height:'100%'}} onMouseOver={()=>{setHovered(index);console.log(index)
              setSelectedProvider({'name':item.name, 'image_url':item.image_url, 'location':item.location, 'display_phone':item.display_phone}),
              console.log(selectedProvider)
            }}>
              <Typography className={classes.name} gutterBottom variant="h7" component="h2"> {item.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Category: {item.categories[0].title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Location: {item.location.city}, {item.location.state}
          </Typography>
            </li>
            )
          }
          return (
            <li className={styles.provider} style={{ height:'100%'}}
            onMouseOver={()=>{
              setHovered(index);console.log(index)
              setSelectedProvider({'name':item.name, 'image_url':item.image_url, 'location':item.location, 'display_phone':item.display_phone}),
              console.log(selectedProvider)

              }}>
              <Typography className={classes.name} gutterBottom variant="h7" component="h2">              {item.name}

          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Category: {item.categories[0].title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Location: {item.location.city}, {item.location.state}
          </Typography>
          </li>
          )
        })}
      </ul>
      </div>


    <div id={styles.mapContainer}>
     <LoadScript id={styles.map}
       googleMapsApiKey='AIzaSyD2iVGnhGjAc6dU4HGPrYQwgwAKuFeqwjI'>

        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          // center={defaultCenter}
          onLoad={map => {
            map.fitBounds(bounds);
          }}
        >

{/*
    <InfoWindow
      position={{lat: 37.548619,lng: -121.973907}}>
        <div>Hello</div>
      </InfoWindow> */}




         {props.data.map((item, index)=> {
           console.log(item.coordinates.latitude, item.coordinates.londgitude);
           let location = {lat: item.coordinates.latitude, lng:item.coordinates.longitude}
           console.log(location)
           if (hovered === index){

           return(
           <Marker key={item.name} position={location} label={item.name}
           onMouseOver={()=>{
             setHovered(index);
             setSelectedProvider({'name':item.name, 'image_url':item.image_url, 'location':item.location, 'display_phone':item.display_phone}),
             console.log(selectedProvider)}}
          //  const [selectedProvider, setSelectedProvider] = useState({name:'',image_url:'', location:{}, display_phone:''})
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
     </div>

     </div>

     {/* Start Modal */}

     <div>
            <Button className={classes.button} size="large" color="primary"  onClick={toggleModal}>
            View Provider
            </Button>
          <div className={stylesModal.App}>
            <Modal
              isOpen={isOpen}
              onRequestClose={toggleModal}
              className={stylesModal.mymodal}
              overlayClassName={stylesModal.myoverlay}
            >
              <CardMedia className={stylesModal.media}
                image={selectedProvider.image_url}
              />
              <CardContent className={stylesModal.content}>
                <Typography gutterBottom variant="h5">
                  {selectedProvider.name}
                </Typography>
                <Typography variant="h7" color="textSecondary" component="p">
                  {selectedProvider.location.address1}
                </Typography>
                <Typography variant="body3" color="textSecondary" component="p">
                  {selectedProvider.location.city}, {selectedProvider.location.state} | {selectedProvider.display_phone}
                </Typography>
                <div className={stylesModal.container}>
                <Typography variant="body3" color="textSecondary" component="p">
                  PAYMENT
                </Typography>
                <CardMedia variant="body3" />
                  CERTIFICATIONS
                </div>
              </CardContent>
              <div className={stylesModal.payment}><Image src={payment} alt='certification'/></div>
              <div className={stylesModal.certification}><Image src={certification} alt='certification'/></div>
            </Modal>
      </div></div>

      {/* End Modal */}


  </>
  )
}
export default MapContainer;
