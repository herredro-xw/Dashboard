import React from 'react';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';


// export const Leaflett = () => {
//   // let map = L.map('app').setView([51.505, -0.09], 13);
//
//   return(
//     <div >LEAFLET</div>
//
//   )
// };
//

type State = {
  lat: number,
  lng: number,
  zoom: number,
}

export const Leaflett = () => {

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

  return (mapp)
}
