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
import indian from './indianoil.png';
import toyota from './toyota.png';
import manya from './manya.png';
import jamboree from './jamboree.jpg';
import iae from './iae.png';
import tpr from './tpr.png';
import wb from './wb.jpg';
import './cards.css';
import cl from './cl.gif';


class Sponsers extends React.Component {
    render() {
        return(
            <MDBContainer >
            <div>
            
     
          
            <h2>Our Previous Sponsers</h2>
            <br/><br/>
                <MDBRow align="center">
              <MDBCol md="3" lg="3" sm="4" className="zoom"><img src={indian} alt="" style={{width:"40%",margin:"1rem"}}/></MDBCol>
              <MDBCol md="3" lg="3" sm="4" className="zoom"><img src={toyota} alt="" style={{width:"60%",margin:"1rem"}}/></MDBCol>
              <MDBCol md="3" lg="3" sm="4" className="zoom"><img src={manya} alt="" style={{width:"50%",margin:"1rem"}}/></MDBCol>
              <MDBCol md="3" lg="3" sm="4" className="zoom"><img src={jamboree} alt="" style={{width:"50%",margin:"1rem"}}/></MDBCol>

            
              </MDBRow>
<br/>
              <MDBRow align="center">
              <MDBCol md="3" lg="3" sm="4" className="zoom"><img src={iae} alt="" style={{width:"40%",margin:"1rem"}}/></MDBCol>
              <MDBCol md="3" lg="3" sm="4" className="zoom"><img src={cl} alt="" style={{width:"60%",margin:"1rem"}}/></MDBCol>
              <MDBCol md="3" lg="3" sm="4" className="zoom"><img src={tpr} alt="" style={{width:"60%",margin:"1rem"}}/></MDBCol>
              <MDBCol md="3" lg="3" sm="4" className="zoom"><img src={wb} alt="" style={{width:"50%",margin:"1rem"}}/></MDBCol>
             
              </MDBRow>
           
                <br/><br/>
            
            </div>
            </MDBContainer>
        );
    }
}

export default Sponsers;
