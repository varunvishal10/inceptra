import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBIcon,
  MDBCol,
  MDBView,
  MDBContainer,
  MDBFormInline,
  MDBAnimation,
  MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText
} from "mdbreact";
import CardExample from './event1';
import Alumni1 from './alumni1';

class Testimonials extends React.Component {
    render() {
        return(
            <MDBContainer>
            <div>
            
     
          
            <h2>Testimonials</h2>
            <br/><br/>
                <MDBRow>
              <MDBCol><Alumni1 /></MDBCol>
             
              </MDBRow>
           
                <br/><br/>
            
            </div>
            </MDBContainer>
        );
    }
}

export default Testimonials;
