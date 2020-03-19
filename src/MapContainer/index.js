import React, { useState, useEffect }  from "react";
// import { Spinner } from 'react-bootstrap';
// import regeneratorRuntime from "regenerator-runtime";

import './MapContainer.css'

import L from 'leaflet'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
// const { Map: LeafletMap, TileLayer, Marker, Popup } = ReactLeaflet

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
  const position = [51.505, -0.09];

  let content = null;
  const map = (
    <Map center={position} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      <Marker position={position}>
        <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
      </Marker>
    </Map>
  )



  if (!isLoading && fetchedData) {
    console.log("loaded && fetchedData -- useEffect should run --");
    console.log(fetchedData);
    content = <p>{map}</p>
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

  return (map);

}

export default MapContainer;
