import React, { useState, useEffect }  from "react";
import { Spinner } from 'react-bootstrap';

// each component gets its own file
import DashNav from './DashNav'
import MapContainer from './MapContainer'
import {LyricContainer, LyricForm} from './LyricContainer'

import './style2.css';
import './reset1.css';

export function Dashboard() {

  // we set one state for the current focus of the dashboard
  const [focus, setFocus] = useState('lyrics');

  // this handles what happens once we get a callback
  let switchFocus = (content) => {
    // in our case, this changes the state of the component
    setFocus(content)
  }

  // we set a variable for what should be rendered depending on the state
  let content = (<div>
    {/*  This is where the content is shown, e.g. the Map */}
  </div>);

  // with each state change the component gets re-rendered
  switch(focus){
    case 'maps':
      content = <MapContainer />
      break;
    case 'lyrics':
      content = <LyricForm />
      break;
    default:
      content = <div>Made some changes to Master and then deployed. Lets see if thats enough...This dash element is not implemented yet</div>
      break;
  }

  // and finally render it here
  return(
    <div id="main" className="main">
      <DashNav
        focus={focus}
        callBack={(evt) => setFocus(evt)} />
      <h2 style={{'fontSize':'3em'}}>
        {focus}
      </h2>
      {content}
    </div>
  )
}





// deprecated
function Controls(props) {
    return(
      // Lyrics button gets the toggle function to "setState" of lyrics.
      <div>
        <button className="control_button" id="button_maps">Maps</button>
        <button className="control_button" id="button_lyrics" onClick={props.toggle}>Lyrics</button>
        <button className="control_button" id="button_others">Others</button>
      </div>
    )
}


function Dashes(props) {
  return(
    <div className="dash" >
      {/* <Maps /> */}
      {/* Passes show-boolean to Lyrics component. Ideally, with an object state, I would pass {props.show.lyrics} */}
      {/* <Lyrics show={props.show} /> */}
    </div>
  )
}

// function Lyrics(props) {
//   return(
//     // Show only when props.show == true
//     <div id="lyrics">
//       <form id="formm">
//         <h3>Search for Lyrics</h3>
//         Artist: <input type="text" id="inputartist" />
//         Title: <input type="text" id="inputtitle" />
//         <div id="lyricsOut">SUBMIT</div>
//       </form>
//     </div>
//   )
// }
