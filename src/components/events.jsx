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
import Band from './band';
import Singer from './singer';
import Dance from './dance';
import Beats from './beats';
import AlumniTeam from './alumniteam';
import Comedy from './comedy';
import './cards.css';


class Events extends React.Component {
    render() {
        return(
            <MDBContainer className="mt-5 p-3" >
            <div>
            
     
          
            <h2>Events</h2>
            <br/><br/>
                <MDBRow align="center">
              <MDBCol md="4" lg="4" sm="5" ><Band/></MDBCol>
              <MDBCol md="4" lg="4" sm="5"><AlumniTeam/></MDBCol>
              <MDBCol md="4" lg="4" sm="5"><Singer/></MDBCol>
            
              </MDBRow>
              <MDBRow align="center">
              <MDBCol md="4" lg="4" sm="5"><Dance/></MDBCol>
              <MDBCol md="4" lg="4" sm="5"><Beats/></MDBCol>
              <MDBCol md="4" lg="4" sm="5"><Comedy/></MDBCol>
             
              </MDBRow>
           
                <br/><br/>
            
            </div>
            </MDBContainer>
        );
    }
}

export default Events;
