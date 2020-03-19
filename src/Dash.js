import React, { useState }  from "react";


// each component gets its own file
import DashNav from './DashNav'
import MapContainer from './MapContainer'
import Lyrics from './LyricContainer'

import './style2.css';
import './reset1.css';

export function Dashboard() {
  // we set one state for the current focus of the dashboard
  const [focus, setFocus] = useState('maps');

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
      // content = <p></p>
      break;
    case 'lyrics':
      content = <Lyrics />
      break;
    default:
      content = <div>This dash element is not implemented yet</div>
      break;
  }

  // and finally render it here
  return(
    <div id="main" className="main">
      <DashNav
        focus={focus}
        callBack={(evt) => setFocus(evt)}
      />
      <h2 style={{'fontSize':'3em'}}>
        {focus}
      </h2>
      {content}

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
