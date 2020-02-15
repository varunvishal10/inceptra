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
import Band from './band2';
import CB from './cb';
import SS from './ss';
import SB from './sb';
import SM from './sm';
import Comedy from './comedy';
import './cards.css';


class Faculty extends React.Component {
    render() {
        return(
            <MDBContainer className="mt-5 p-3" >
            <div>
            
     
          
            <h2>Supervisory Faculties</h2>
            <br/><br/>
                <MDBRow align="center">
              <MDBCol md="6" lg="6" sm="12" ><CB/></MDBCol>
              <MDBCol md="6" lg="6" sm="12"><SS/></MDBCol>
    
            
              </MDBRow>
              <MDBRow align="center">
              <MDBCol md="6" lg="6" sm="12"><SB/></MDBCol>
              <MDBCol md="6" lg="6" sm="12"><SM/></MDBCol>

             
              </MDBRow>
           
                <br/><br/>
            
            </div>
            </MDBContainer>
        );
    }
}

export default Faculty;
