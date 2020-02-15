import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./index.css";
import FullPageIntroWithNonFixedNavbar from './components/navabar';

class App extends Component {
  render() {
    return (
      <div>
     <FullPageIntroWithNonFixedNavbar />
     </div>
    );
  }
}

export default App;
