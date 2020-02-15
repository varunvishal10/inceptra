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
  MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText
} from "mdbreact";
import CardExample from './event1';

class Brochure extends React.Component {
    render() {
        return(

            <div>
            
        
            <MDBContainer>
            <h2>Brochure</h2>
            <br/><br/>
                <MDBRow>
               
                  <MDBCol md="12" sm="12">
                  Individuals, organisations and companies are whole heartedly welcome to lend hand with us. To make Inceptra a grand event having their personal benefit as well because we will be having a huge crowd of over 300 guests if not less who will be attracted to your products and business for their own profit.Your brand will be promoted in the venue as well as in all other promotions of ours.
RECURSION will accept advertisements from individuals or organizations for insertion in the Souvenir.
All the payments are need to be done by cheque or A/C payee in favor of "NSEC IT ALUMNI ASSOCIATION" payble at Kolkata.
The sponsorship details are below:

<br/> <br/>
<div align="center">
BANK NAME: PUNJAB NATIONAL BANK <br/>

         BRANCH: NSEC <br/>

         NAME: NSEC IT ALUMNI ASSOCIATION <br/>

         A/c NO: 4885000100014979 <br/>

         IFSC CODE: PUNB0488500 <br/> <br/>
         </div>

All rates are negotiable and are subjected to Terms and Conditions which will be discussed during the agreement.
                  </MDBCol>
          

                  </MDBRow>
                <br/><br/>
            </MDBContainer>
            </div>
        );
    }
}

export default Brochure;
