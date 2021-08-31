import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = (props) => {

  const mapStyles = {
    height: "60vh",
    width: "100%",
    marginRight:'5vh'};

  const defaultCenter = {
    lat: 37.548619, lng: -121.973907
  }

  const locations = [
    {
      name: "Location 1",
      location: {
        lat: 41.3954,
        lng: 2.162
      },
    },
    {
      name: "Location 2",
      location: {
        lat: 41.3917,
        lng: 2.1649
      },
    },
    {
      name: "Location 3",
      location: {
        lat: 41.3773,
        lng: 2.1585
      },
    },
    {
      name: "Location 4",
      location: {
        lat: 41.3797,
        lng: 2.1682
      },
    },
    {
      name: "Location 5",
      location: {
        lat: 41.4055,
        lng: 2.1915
      },
    }
  ];

  console.log(props.data)

  // const bounds = new window.google.maps.LatLngBounds();


  return (
     <LoadScript
       googleMapsApiKey='AIzaSyD2iVGnhGjAc6dU4HGPrYQwgwAKuFeqwjI'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}>
         {
            locations.map(item => {
              return (
              <Marker key={item.name} position={item.location}/>
              )
            })
         }

         {props.data.map(item=> {
           console.log(item.coordinates.latitude, item.coordinates.longitude);
           let location = {lat: item.coordinates.latitude, lng:item.coordinates.longitude}
           return(
           <Marker key={item.name} position={location}/>
           )
         }

         )}
        </GoogleMap>
     </LoadScript>
  )
}
export default MapContainer;
