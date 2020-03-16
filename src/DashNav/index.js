import React from "react";

import './DashNav.css'

function DashNav(props) {
  let classes = ["DashNav"];
  // console.log(classes);

  classes.push(props.className);
  // console.log(classes);

  // here the function is declared what happens when clicked
  let clickHandler = (info) => {
    // we here simply pass the info back into the callback function in the props
    // this allows us to give the info to the component above
    props.callBack(info)
  }

  // with this variable we are able to e.g. highlight the button
  // we could f.e. add it to our classes
  classes.push(props.focus)
  // this variable comes from the state of the parent

  // each button gets the handlerFn onClick
  return(
    <div className={classes.join(' ')}>
      <button onClick={() => {props.callBack('maps')}}>Maps</button>
      <button onClick={() => {clickHandler('lyrics')}}>Lyrics</button>
      <button onClick={() => {clickHandler('others')}}>Others</button>
    </div>
  )
}


export default DashNav;
