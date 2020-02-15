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
import Band from './band1';
import Singer from './singer';
import Dance from './dance';
import Beats from './beats';
import AlumniTeam from './alumniteam';
import Comedy from './comedy';
import './cards.css';
import Nilesh from './nilesh';
import Kaustav from './kaustav';
import Alekh from './alekh';
import Alebhia from './alebhia';
import Subham from './subham';
import Varun from './varun';
import Abhishek from './abhishek';
import Vishal from './vishal';
import Ritesh from './ritesh';
import Satish from './satish';
import Anuska from './anuska';
import Vish from './vish';

class Team extends React.Component {
    render() {
        return(
            <MDBContainer className="mt-5 p-3" >
            <div>
            
     
          
            <h2>Our Team</h2>
            <br/><br/>
                <MDBRow align="center">
                <MDBCol md="4" lg="4" sm="5"><Alebhia/></MDBCol>  
              <MDBCol md="4" lg="4" sm="5"><Abhishek/></MDBCol>
              <MDBCol md="4" lg="4" sm="5" ><Nilesh/></MDBCol>

               
                    
              </MDBRow>
              <MDBRow align="center">
              <MDBCol md="4" lg="4" sm="5"><Kaustav/></MDBCol>    
              <MDBCol md="4" lg="4" sm="5"><Subham/></MDBCol>
              <MDBCol md="4" lg="4" sm="5"><Alekh/></MDBCol>
              
             
              </MDBRow>
              <MDBRow align="center">
              <MDBCol md="4" lg="4" sm="5"><Varun/></MDBCol>
              <MDBCol md="4" lg="4" sm="5"><Vishal/></MDBCol>
              <MDBCol md="4" lg="4" sm="5"><Satish/></MDBCol>
        </MDBRow>
             
            
              <MDBRow align="center">
              <MDBCol md="4" lg="4" sm="5"><Ritesh/></MDBCol>      
              <MDBCol md="4" lg="4" sm="5"><Anuska/></MDBCol>
              <MDBCol md="4" lg="4" sm="5"><Vish/></MDBCol>
        
             
              </MDBRow>
           
           
                <br/><br/>
            
            </div>
            </MDBContainer>
        );
    }
}

export default Team;
