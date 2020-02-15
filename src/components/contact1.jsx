import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import team from './team.png';
import './cards.css';


const Contact1 = () => {
  return (
    <MDBCol className="mb-r" style={{marginTop:"1rem"}}>

      <MDBCard style={{ width: "17rem" , background:"black" }}>
        
      <MDBCardBody>
    <h4 style={{color:"white"}}>Alebhia Ash</h4>
        
          <MDBCardText style={{color:"lightgray"}}>
           Email ID : alebhia.1998@gmail.com <br/>
           Phone Number : +918240143517

          </MDBCardText>
        
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default Contact1;