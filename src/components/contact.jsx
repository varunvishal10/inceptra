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
  MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText,MDBBtnGroup,MDBIcon
} from "mdbreact";
import CardExample from './event1';
import FormPage from './form';
import Contact1 from './contact1';
import Contact2 from './contact2';


class Contact extends React.Component {
    render() {
        return(

            <div>
            
        
            <MDBContainer>
            <h2>Contact Us</h2>
            <br/><br/>
                <MDBRow>
                  
                    <MDBCol md="12" lg="12" sm="12" style={{marginTop:"2rem"}}><h4 align="center">Ask your Query</h4> 
                    <br/><br/>
<MDBRow align="center">
<MDBCol md="6" lg="6" sm="12" style={{marginTop:"1rem"}} ><Contact1/></MDBCol>
<MDBCol md="6" lg="6" sm="12" style={{marginTop:"1rem"}} ><Contact2/></MDBCol>

</MDBRow>
                    
                    <br/><br/>

                    <MDBContainer align="center">
                    <div align="center" className="btn-toolbar" role="toolbar" style={{marginTop:"1rem",marginLeft:"1rem"}}>
                    <h4 style={{marginTop:"1rem",marginRight:"1rem"}}>Follow us on :  </h4>
        <MDBBtnGroup className="mr-2" align="center" style={{marginLeft:"1rem"}} >
        <a href="https://www.facebook.com/inceptra2k20/" target="_blank">
          <MDBBtn color="blue lighten-2">
            
          <MDBIcon fab icon="facebook-f" />
          
          </MDBBtn>
          </a>
          <MDBBtn color="pink lighten-2">
          <MDBIcon fab icon="instagram" />
          </MDBBtn>
        </MDBBtnGroup>
      </div>
      </MDBContainer></MDBCol>


                </MDBRow>
              
            </MDBContainer>
            </div>
        );
    }
}

export default Contact;
