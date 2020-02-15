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
  MDBCol,
  MDBView,
  MDBContainer,
  MDBFormInline,
  MDBAnimation,
  MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText,MDBFooter
} from "mdbreact";
import CardExample from './event1';

class Footer extends React.Component {
    render() {
        return(

            <div>
            
        
            <MDBFooter color="black">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
         Developed By : <a href="http://varun.dscnsec.com" target="_blank"> Varun Vishal </a>
        </MDBContainer>
      </div>
    </MDBFooter>
            </div>
        );
    }
}

export default Footer;
