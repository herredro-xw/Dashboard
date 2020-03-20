import React, { useState, useEffect }  from "react";
import './MapContainer.css'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'
import {Leaflett} from './Leaflett.js'


const position = [51.505, -0.09]


const MapContainer = (props) => {
  const [loaded, setLoaded] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(false);

  let classes = ["MapContainer"];
  console.log(classes);
  classes.push(props.className);
  console.log(classes);





  // I add all relevant functions and variables to the specific component to keep track of where everything lies


  let content = null;
  const position = [51.505, -0.09];
  let mapp = (
    <div>
      <Map center={position} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={position}>
          <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
        </Marker>
      </Map>
    </div>
  )


  let geoloc = null;

  useEffect(() => {
    async function fetchData() {
        try {
            const response = await navigator.geolocation.getCurrentPosition(data => {
                console.log('first ', data);
                const {latitude,longitude} = data.coords;
                console.log("json ", data.coords.longitude);
                geoloc = [latitude, longitude]
                // geoloc = [data.coords.longitude. data.coords.latitude]
                // fetchMap(latitude, longitude);
            });
            // const json = await response.json();
            // console.log(json.coords.latitude, json.coords.longitude);
            return geoloc
        } catch (e) {
            console.error(e);
        }

    };
    function getMap(coord) {
      console.log('getMap Props: ', coord);
      let mapp = (
        <div>
          <Map center={[1,1]} zoom={13}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <Marker position={position}>
              <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
            </Marker>
          </Map>
        </div>
      )
    }
    let json = fetchData()
    .then(geoloc => getMap(geoloc))
    console.log("json ", json);
  }, []);




  if (!isLoading && fetchedData) {
    console.log("loaded && fetchedData -- useEffect should run --");
    console.log(fetchedData);
    content = <p>{mapp}</p>
  }
  if (!isLoading && !fetchedData) {
    console.log("!loaded && !fetchedData -- FIRST should be --");
  }
  if (isLoading && !fetchedData) {
    console.log("loaded && !fetchedData -- Loading right now --");
  }
  if (isLoading && fetchedData) {
    console.log("loaded && fetchedData -- THIS SHOULD NEVER BE --");
  }
  // if (loaded && fetchedData) {
  //   console.log("loaded && fetchedData -- useEffect should run --");
  // } else if (!loaded && !fetchedData) {
  //   console.log("!loaded && !fetchedData -- FIRST (should be)");
  //   content = (
  //     <div
  //      id="map"
  //      >
  //       <Spinner
  //         animation="border"
  //         variant="primary"
  //       />
  //       <p>Loading Map</p>
  //     </div>
  //   )
  // } else if (loaded && !fetchedData){
  //   console.log("loaded && !fetchedData -- Problem with loading??");
  //   content = (
  //     <p>Problem arised while loading Data</p>
  //   )
  //
  // } else {
  //   console.log("no if statement worked");
  //   content = <p>ERROR</p>
  // }

  return (mapp);

}

export default MapContainer;
