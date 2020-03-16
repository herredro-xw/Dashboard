import React from 'react';
import {useState} from 'react';
import { Button, ButtonToolbar, Navbar, Nav, NavDropdown, Form, FormControl, Container, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import logo from './media/xwlogo.jpg';

export const Navbars = () => {
  return(
    <div id="navbar">
  <Navbar bg="dark" variant="dark" fixed='top'>
    <Navbar.Brand href="#home">
      <img src={logo} alt="Logo" />
      Dash
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Hoooome</Nav.Link>
      <Nav.Link href="https://wiki.kreuzwerker.de">Wiki</Nav.Link>
      <Nav.Link href="https://intranet.kreuzwerker.de">Intranet</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
</div>
  )
};










// The rest is junk






export const ControlButtonsBoot = () => {

  return(
    <div>
        <Button variant="success">Maps</Button>
        <Button variant="success">Lyrics</Button>
        <Button variant="success">Others</Button>
        {/* <Button variant="danger" className="ml-1">Success</Button> */}
    </div>
  )
};

export function TestProps(props){
  return(
    <h1 onClick={props.onClick}>{props.title}</h1>
  )
}

export function ControlButtons(props) {
  const [value, setValue] = useState(["HAHA", 2, 3]);

  /*
   * The second argument that will be passed to
   * `handleChange` from `ToggleButtonGroup`
   * is the SyntheticEvent object, but we are
   * not using it in this example so we will omit it.
   */
  const handleChange = val => setValue(val);

  return (
    <div>
      <button className={"control_button "+props.activated.maps} id="button_maps" onClick={props.setActivated}>Maps</button>
      <button className={"control_button "+props.activated.lyrics} id="button_lyrics">Lyrics</button>
      <button className={"control_button "+props.activated.others} id="button_others">Others</button>

    </div>
  );
};

// TOGGLE STEROIDS
// export function ToggleButtonGroupControlled(props) {
//   /*
//    * The second argument that will be passed to
//    * `handleChange` from `ToggleButtonGroup`
//    * is the SyntheticEvent object, but we are
//    * not using it in this example so we will omit it.
//    */
//   const handleChange = val => setValue(val);
//
//   return (
//     <ToggleButtonGroup type="checkbox" value={value} onChange={props.handleHide}>
//       <ToggleButton value={"map"} onClick={props.handleHide("value")}>Map</ToggleButton>
//       <ToggleButton value={"lyrics"}>Lyrics</ToggleButton>
//       <ToggleButton value={"others"}>Other</ToggleButton>
//     </ToggleButtonGroup>
//   );
// };
