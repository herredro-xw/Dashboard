import React from 'react';
import ReactDOM from 'react-dom';

import {Navbars} from './Bootstrap_Elements.js';
import {Dashboard} from './Dash.js';



ReactDOM.render(
  <div>
    <Navbars />
    <Dashboard />
  </div>,
  document.getElementById("app")
);
